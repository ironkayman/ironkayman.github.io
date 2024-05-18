<script>
  import { onMount } from "svelte";

  import { TropicalStorm } from "svelte-bootstrap-icons";
  import { currentPageName } from "$lib/stores/mawanet.loader";

  /**
   * Scrolls do a designated div end
   * 
   * @param {Event} e
   */
  // function clickHandler(e) {
  //   e.preventDefault();
  //   window.scrollTo({
  //     behavior: "smooth",
  //     top: 0,
  //   })
  // }

  // onMount(() => {
  //   const button = document.querySelector("#scroll-on-top");
  //   button.addEventListener("click", clickHandler);
  // })
</script>

<div class="sidebar">
  <div class="header">
    <a class="header-item header-start" data-sveltekit-preload-data="tap" href="/mawanet/index">
      <TropicalStorm width={30} height={30} />
    </a>
    <span class="header-item sidebar-span" id="maec-db-logo">MAEC</span>
    <span class="header-item sidebar-span">//</span>
    <span class="header-item sidebar-span">
      {$currentPageName}
    </span>
    <!-- <div class="header-item" id="scroll-on-top">
      <ArrowUp width={24} height={24} />
    </div> -->
  </div>
</div>

<div class="toc">
  <slot name="toc"></slot>
</div>

<style>

.sidebar {
  position: fixed;
  /* z-index: 3; */

  background-color: rgb(45, 45, 48);
  min-width: 3.2rem;

  height: calc(100% - 1rem);

  border-radius: 4px;
  border-style: hidden;
  border-color: rgb(45, 45, 48);
}

.header {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  padding: 3.4rem 0rem;
  max-height: 100vh;
}

.header-item {
  flex: 0 0 0;
  flex-basis: content;

  writing-mode: vertical-rl;
  text-orientation: mixed;

  font-size: 1.4em;
  padding: 0.2em 0em;

  & .sidebar-span:hover {
    transition-duration: 40ms;
    color: rgb(164, 164, 164);
  }
}

.header-start {
  border-radius: 4px;
  padding: 0.3rem;
  margin-bottom: 0.2em;

  &:hover {
    background-color: rgba(30, 30, 33, 0.6);
    color: rgba(245, 181, 5, 0.9);
  }
}

/* #maec-db-logo:hover {
  background: linear-gradient(
      30deg,
      hsl(20, 85%, 66%),
      hsl(50, 85%, 66%),
      hsl(34, 79%, 66%)
    )
    center center;
  background-size:100%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
} */

.toc {
  display: none;
}

@media only screen and (min-width: 1001px) {
  .toc {
    display: flex;
    position: fixed;
    top: 26vh;
    left: 4.2rem;
    width: 13%;
    height: calc(100% - 26vh);
    word-wrap: normal;
    overflow-y: scroll;
  }
}
</style>
