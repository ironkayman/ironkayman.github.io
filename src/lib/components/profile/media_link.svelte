<script>
    export let url, label;
</script>

<a class="media-link-container" target="_blank" href="{url}">
    <div>
        <slot/>
        <span>{label}</span>
    </div>
</a>

<style>

.media-link-container {
    border-radius: 2px;
    margin: 0.5rem;
    padding: 4px 0.6rem;
    text-decoration: none;
    background-color: hsl(0, 8%, 31%);
    box-shadow: 0px 8px hsl(0, 8%, 25%);

    & div {
        display: table;
        min-width: 7.5rem;

        & * {
            vertical-align: middle;
            font-size: 1.15em;
            /* font-weight: 600; */
            font-family: 'fira-sans-bold' !important;
            /* display:table-cell; */
        }
        & svg,img {
            color: hsl(278, 33%, 6%);
            margin-right: 0.25em;
        }
    }

    &:hover {
        & svg.bi-github {
            color: rgb(84, 214, 114);
        }
        & svg.bi-twitter {
            color: rgb(49, 169, 243);
        }
        & .furaffinity-logo {
            color: rgb(49, 169, 243);
        }
        & svg.bi-discord {
            color: rgb(116, 162, 218);
        }
        & svg.bi-mailbox2 {
            color: rgb(244, 78, 75);
        }

        background-color: hsl(0, 8%, 27%);
        box-shadow: 0px 6px hsl(0, 8%, 20%);
        transition: 100ms;
        padding-bottom: 2px;
        margin-top: calc(0.5rem + 2px);

        & span::after {
            content: '*';
            padding-left: 4px;
            font-size: 0.8rem;
            position: absolute;
            color: hsl(0, 0%, 70%, 0.5);
            margin-top: 14px;
        }

        &:active {
            background-color: hsl(0, 8%, 23%);
            box-shadow: 0px 6px hsl(0, 8%, 16%);
            transition: 100ms;
        }
    }
}

a {
    color: beige;
}

</style>