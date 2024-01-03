from typing import Generator

from pathlib import Path
from typing import Any
from json import loads
from os import mkdir
from shutil import rmtree
from re import Pattern, compile as re_compile, VERBOSE

_LOADER_BEGIN = """
import { derived, writable } from "svelte/store";

import Error404 from "$lib/components/error.404.svelte"
import Error403 from "$lib/components/error.403.svelte"

export const nextPageName = writable();
export const currentPageName = writable();
export const doesPageDiffer = derived(
  [currentPageName, nextPageName],
  ($values, set) => {
    set($values[0] !== $values[1])
  }
)

/**
 * Dynamically import an existing mdx componet (bundled)
 * 
 * @param {String} componentName 
 */
export async function fetchComponent (componentName) {
    let EntryComponent = null;
    let error = undefined;
    try {
      switch (componentName) {
        case 'index':
          EntryComponent = (await import('$lib/mawanet/maelstrom_encyclopedia.mdx')).default;
          break;
"""

_LOADER_END = """
        default:
          EntryComponent = Error403;
          break;
      }
    } catch (e) {
      console.error(e);
      EntryComponent = Error404;
      error = e;
    }
    nextPageName.set(componentName.replace(/\_/g," ").split(' ')[0].toUpperCase());
    return {
        componentName,
        entryComponent: EntryComponent,
        error,
    }
}
"""

_LOADER_IMPORT = """
        case '{}':
          EntryComponent = (await import('$lib/mawanet/{}.mdx')).default;
          break;
"""

class Globber:

    _RE_WIKILINK: Pattern = re_compile(
        r"""\[{2}   # openning doubles
            (?P<filename>[\w\s]+?) # filename
            (?:\#(?P<id>[\w\s\-//\'\.\d\(\)\[\]]+))?    # wont capture, we ignore ids
            (?:[\|\:](?P<alias>[\w\s\-//\'\.\d\(\)]+))?    # visible alias
            \]{2}""", VERBOSE,
    )

    _MDX_COMPONENT_LINK_TEMPLATE = '<Link path="/mawanet/{}">{}</Link>'
    _MDX_IMPORTS = '<script>import Link from "$lib/components/link.svelte"</script>\n\n' 

    def __init__(self, glob_root: Path, output_dir: Path, whitelist: None | Path) -> None:
        """
        Parameters
        ----------
        glob_root : Path
            Path to `.md`s' root directory
        output_dir : Path
            Where files will be moved
        """
        self._glob_root = glob_root
        self._output_dir = output_dir
        self._whitelist = whitelist

    def __parse_whitelist(self) -> list[str]:
        text = loads(self._whitelist.read_text())
        whileisted_file_stems = []
        for filename in text['allow']:
            whileisted_file_stems.append(filename)
        return whileisted_file_stems

    def __call__(self) -> Any:
        rmtree(self._output_dir)
        mkdir(self._output_dir)

        if self._whitelist:
            whileisted_file_stems = self.__parse_whitelist()

        glob_result: Generator = self._glob_root.glob('**/*.md')
        count = 0
        for count, md in enumerate(glob_result):
            if self._whitelist and md.stem not in whileisted_file_stems:
                continue
            print('processing:', md.stem)

            name_normalised: str = md.stem.replace(' ', '_')
            contents = md.read_text()
            with open(
                self._output_dir / (name_normalised + '.mdx'),
                mode='w',
                encoding='utf-8'
            ) as mdx:
                mdx.write(contents)
        print(f'{count} files processed')

    def replace_wikilinks(self):
        """
        Replaces `[[Entry]]`, `[[Entry Whitespaces#id|alias]]` to
        
            <Link path="/maelstrom/entry">Entry</Link>
        """
        for mdx in self._output_dir.iterdir():
            contents_old = mdx.read_text()
            contents_new = ''
            mappings_cache = []
            for m in self._RE_WIKILINK.finditer(contents_old):
                filename = m.group('filename')
                id = m.group('id')
                alias = m.group('alias')
                link = self._MDX_COMPONENT_LINK_TEMPLATE.format(
                    filename.lower().replace(' ', '_'), alias or filename
                )
                mappings_cache.append((m.span(), link))
            contents_new = contents_old
            for mpair in reversed(mappings_cache):
                spans: tuple = mpair[0]
                string = mpair[1]
                contents_new = contents_new[:spans[0]] + string + contents_new[spans[1]:]
            mdx.write_text(self._MDX_IMPORTS + contents_new)

    def generate_js_imports(self) -> None:
        imports = []
        for mdx in self._output_dir.iterdir():
            imports.append(_LOADER_IMPORT.format(mdx.stem, mdx.stem))
        js_loader_contents = _LOADER_BEGIN + ''.join(imports) + _LOADER_END
        (Path().cwd() / 'src/lib/stores/mawanet.loader.js').write_text(js_loader_contents)