<script>
  import {
    melt,
  } from '@melt-ui/svelte';
 
  export let tree = [];
  export let activeHeadingIdxs;
  export let item;
  export let level = 1;
</script>

<div class="entry-table-of-content">
  <ul class="{level !== 1 ? 'pl-4' : ''}">
    {#if tree && tree.length}
      {#each tree as heading, i (i)}
        <li>
          <a
            href="#{heading.id}"
            use:melt={$item(heading.id)}
          >
            <!--
              Along with the heading title, the original heading node
              is also passed down, so you can display headings
              however you want.
            -->
            {@html heading.node.innerHTML}
          </a>
          {#if heading.children && heading.children.length}
            <svelte:self
              tree={heading.children}
              level={level + 1}
              {activeHeadingIdxs}
              {item}
            />
          {/if}
        </li>
      {/each}
    {/if}
  </ul>
</div>

<style>

ul,li {
  padding-left: 0em;
  list-style: none;
  padding: 6px 0px;
}
a {
  opacity: 0.5;
  &[data-active] {
    opacity: 0.9;
    color: hsl(25, 73%, 78%);
    font-weight: bolder;
  }
}

</style>