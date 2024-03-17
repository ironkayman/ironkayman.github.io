<script>
  import { writable } from 'svelte/store';
  
  import { createPinInput, melt } from '@melt-ui/svelte';
  import { onMount } from 'svelte';

  const passcode = '6,4,9,8,7,1';
  const passcodeMatch = writable(false);
  const passcodeCurrent = writable([]);

  const {
    elements: { root, input },
  } = createPinInput({
    placeholder: '-',
    value: passcodeCurrent,
  });

  passcodeCurrent.subscribe(v => {
    passcodeMatch.set(v.toString() === passcode);
  });
</script>

<div class="content-wrapper">
  <center>
    <div id="nar-container">
      <div id="heading">
        <span>
          Narraphysic Isolation Environment
        </span>
      </div>
      <div id="desc">
        <span>Gateway [ <span id="gateway">PAU-9</span> ] : Clearance [ <span id="clearance">A2-1</span> ]</span>
      </div>
    </div>
    <div use:melt={$root}>
      {#each Array.from({ length: 6 }) as _}
      <input
        class="cell"
        use:melt={$input()}
      />
      {/each}
    </div>
    {#if $passcodeMatch}
      <button id="passcode-check">
        <a href="/mawanet">[ <span>Access Granted</span> ] Proceed</a>
      </button>
    {/if}
  </center>
</div>


<style>

.content-wrapper {
  padding: 0em 1.6em;
}

/* https://www.dafont.com/familiar-pro.font */
@font-face {
  font-family: 'familiar-pro';
  font-style: normal;
  src: url('/fonts/familiar_pro/Familiar Pro-Bold.otf') format("opentype");
}

center {
  padding-top: 1.33rem;
  padding-bottom: 7rem;
  min-height: 24.5rem;
}

#nar-container {
  margin-bottom: 6rem;
}

/* https://www.dafont.com/liberation-serif.font */
@font-face {
  font-family: 'liberation-serif';
  font-style: normal;
  src: url('/fonts/liberation_serif/LiberationSerif-Regular.ttf');
}

#heading {
  padding: 0.6rem;
  border-radius: 12px;
  background-color: #353136;
  margin-bottom: 1rem;

  & span {
    text-transform: uppercase;
    font-family: 'liberation-serif';
    font-size: 2.6rem;
    font-weight: 300;
    color: rgb(255, 191, 90);
    /* color: hsl(355, 100%, 62%); */

    &::before {
      text-transform: uppercase;
      content: 'Narraphysic Isolation Environment';
      /* z-index: 1; */
      position: absolute;
      /* margin-right: 2rem; */
      font-family: 'familiar-pro';
      font-size: 2.6rem;
      font-weight: 300;
      /* color: rgb(255, 191, 90, 0.1); */
      color: hsla(355, 100%, 62%, 0.04);
      filter: blur(0.26rem);
    }
  }
}

#desc {
  padding: 0.6rem;
  border-radius: 10px;
  background-color: #1e1b1e;
  /* margin-bottom: 8rem; */
  width: fit-content;
  padding: 0.33rem 2rem;

  & span {
    text-transform: uppercase;
    font-family: serif;
    /* font-family: 'familiar-pro'; */
    font-size: 1.4rem;
    font-weight: 300;
    color: rgb(212, 160, 76);
  }
}

#gateway {
  color:#fe4800 !important;
}

#clearance {
  color:#fe4800 !important;
}


.cell {
  font-weight: 800;
  font-size: 0.8rem;
  /* border-style: solid;
  border-color: transparent; */
  width: 3em;
  height: 3em;
  border-radius: .375rem;
  text-align: center;
  margin: 0.9em;
  background-color: hsl(32, 4%, 40%);
  /* filter: drop-shadow(0 0 0.3rem #fe4800); */

  border-width: 1px;
  border-style: solid;
  /* border-color: #fe5500; */
  font-weight: bolder;
  color: white;
  background-color: #353136;
}

#passcode-check {
  text-transform: uppercase;
  font-size: 1.1em;
  padding: 0.4em;
  border-radius: 3px;
  border-style: hidden;
  background-color: #1e1b1e;
  color: rgb(212, 160, 76);
  font-weight: 300;

  &:hover {
    background-color: rgb(38, 36, 34);
  }
  &:active {
    color: black;
    background-color: hsl(140, 6%, 90%);
    & span {
      color: inherit;
    }

    &::after {
      content: "ing"
    }
  }


  & a {
    text-decoration: none;
    color: inherit;
  }

  & span {
    color: rgb(82, 215, 122);
    filter: drop-shadow(0 0 3px rgba(82, 215, 122, 0.2));
  }
}

</style>