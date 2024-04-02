<script>
    /**
     * @module SecureEnclaveA
     */

    import { slide } from 'svelte/transition'
    import { createCollapsible, melt } from '@melt-ui/svelte'

    import { Fullscreen, ArrowBarUp, } from "svelte-bootstrap-icons"

    const {
        elements: { root, content, trigger },
        states: { open }
    } = createCollapsible({
        forceVisible: false,
    })
</script>

<div use:melt={$root}>
    <center>
        <div class="warning-stripes"/>
        <button use:melt={$trigger} class="nier-access-point-trigger">
            {#if $open}
                <span class="nier-access-point-close"><ArrowBarUp/> Revoke access</span>
                to
            {:else}
                <span class="nier-access-point-access"><Fullscreen/> Access</span>
            {/if}
            NIER | Secure Enclave <span class="nier-access-enclave">A2</span>
        </button>
        <div class="warning-stripes"/>
    </center>
    {#if $open}
    <div transition:slide class="nier-enclave-a">
        <slot/>
    </div>
    {/if}
</div>

<style>

center {
    display: flex;
    margin: 1.2rem 0rem;
    gap: 0.8rem;

    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;

    & > div {
        flex: 1;
        &:first-of-type {
            border-top-left-radius: 2px;
            border-bottom-left-radius: 2px;
        }
        &:last-of-type {
            border-top-right-radius: 2px;
            border-bottom-right-radius: 2px;
        }
    }
    /* & > button {
        flex: 3;
    } */
}

.nier-access-point-trigger {
    font-size: 1.12rem;
    max-width: 60%;

    padding: 0.5rem 0.8rem;

    background-color: rgb(45, 45, 48);
    margin: 0em;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    border-color: rgb(55,55,63);
    cursor: pointer;

    & svg {
        margin-bottom: -3px;
        margin-right: 3px;
    }

    &:hover {
        background-color: rgb(50, 50, 54);
    }
}

.nier-access-point-access {
    color: hsl(41, 86%, 64%);
    font-weight: bolder;
}
.nier-access-point-close {
    color: hsl(0 0% 52%);
    font-weight: bolder;
}

.nier-access-enclave {
    color: hsl(41, 86%, 64%);
    font-weight: bold;
}

.warning-stripes {
    height: 1rem;
    /* background-color: hsl(36, 80%, 56%);
    background-image: repeating-linear-gradient(120deg, transparent, transparent 22px, rgb(0,0,0) 1px 50px); */
}

.nier-enclave-a {
    border-radius: 4px;
    /* border-color: hsl(0 0% 52%); */
    /* border-width: 3px; */
    /* border-style: solid; */
    padding: 1rem;

    background-color: hsl(0 0% 52%);
    /* box-shadow: 0 1mm 4mm hsla(0, 30%, 60%, 0.26); */

    & span,ul,li,p,h2,h3,h4,h5 {
        color: rgb(35, 35, 40);
        font-weight: 600;
    }

    & a {
        color: rgb(70, 60, 65);
    }

    & :is(h2,h3,h4,h5)::after {
        content: unset;
    }

}

</style>