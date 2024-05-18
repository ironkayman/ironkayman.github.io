<script>
  
  import { createTableOfContents } from '@melt-ui/svelte';

  import { currentPageName } from "$lib/stores/mawanet.loader";
  import Tree from '$lib/components/toc.svelte';
  import Sidebar from "$lib/components/sidebar.svelte"
  
  export let data;

  if (data.error) console.error(data.error);

  $: updateTitle(data.pageName);
 
  const tocRenderStyleExclusions = [
    'MAELSTROM ENCYCLOPEDIA CENTRAL'.toLowerCase(),
  ]

  /**
   * crete table of content by scanning a component
   */
  const {
    elements: { item },
    states: { activeHeadingIdxs, headingsTree },
  } = createTableOfContents({
    selector: '#toc-builder-preview',
    // TODO: if only 2 or less headings are present, exclude all
    exclude: ['h1',],
    // FIXME: sometimes other pages ones navigated don't display
    // custom active styles with "highest" stategy 
    activeType: tocRenderStyleExclusions.includes(data.pageName) ? 'highest' : 'all',
    /**
     * Filters all heading belonging to the current mdx entry
     * 
     * @param {HTMLElement} heading Heading element
     * @returns {Boolean} Can an element be passed into final table of contents
     */
    headingFilterFn: (heading) => {
      const validity = !heading.hasAttribute('data-toc-ignore') && !heading.className.includes('error403') && !heading.parentNode.className.includes('peeker');
      return validity;
    },
    scrollFn: (id) => {
      const container = document.getElementById('toc-builder-preview');
      const element = document.getElementById(id);

      if (container && element) {
        container.scrollTo({
          top: element.offsetTop - container.offsetTop - 24,
          behavior: 'smooth',
        });
      }
    },
  });

  /**
   * Updates documents title reactively
   * 
   * @param {String} pageName Page/entry's file name
   */
  function updateTitle(pageName) {
    let titleStructured = pageName.replace(/\_/g," ");
    let title = titleStructured.charAt(0).toUpperCase() + titleStructured.substr(1).toLowerCase();
    document.title = `${title} // MAWANET`;
  }
  $: currentPageName.set(data.pageName.replace(/\_/g," ").split(' ')[0].toUpperCase());
</script>

<Sidebar>
  <div slot="toc">
    <Tree
      tree={$headingsTree}
      activeHeadingIdxs={$activeHeadingIdxs}
      {item}
    ></Tree>
  </div>
</Sidebar>

<div class="container">
  <div id="toc-builder-preview">
    <svelte:component this={data.pageComponent}></svelte:component>
  </div>
</div>
