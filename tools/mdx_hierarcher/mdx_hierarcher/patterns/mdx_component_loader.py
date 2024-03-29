from .common import FilePattern

_PATH = "src/lib/stores/mawanet.loader.js"

_LAYOUT_START = """
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

_LAYOUT_END = """
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

_SLOT_PATTERN = """
    case '{}':
        EntryComponent = (await import('$lib/mawanet/{}.mdx')).default;
        break;
"""


MDX_COMPONENT_LOADER = FilePattern(
    path=_PATH,
    layout_start=_LAYOUT_START,
    layout_end=_LAYOUT_END,
    slot_pattern=_SLOT_PATTERN,
)