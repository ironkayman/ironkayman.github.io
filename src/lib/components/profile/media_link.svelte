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
    background-color: hsl(0, 8%, 31%);
    text-decoration: none;

    & div {
        display: table;
        min-width: 7.5rem;

        & * {
            vertical-align: middle;
            /* display:table-cell; */
        }
        & svg,img {
            color: hsl(278, 33%, 6%);
            margin-right: 0.14em;
        }
    }

    &:hover {
        & svg.bi-github {
            color: rgb(84, 214, 114);
        }
        & svg.bi-twitter {
            color: rgb(49, 169, 243);
        }
        & svg.bi-discord {
            color: rgb(116, 162, 218);
        }
        & svg.bi-mailbox2 {
            color: rgb(244, 78, 75);
        }
    }
}

a {
    color: beige;
}

</style>