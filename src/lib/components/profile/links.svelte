<script>
    import { Twitter, Github, Mailbox2, } from 'svelte-bootstrap-icons'

    import MediaLink from "./media_link.svelte";
</script>
<div id="link-array">
    <MediaLink url="https://twitter.com/ironkayman" label="Twitter">
        <Twitter height="26" width="26"/>
    </MediaLink>
    <MediaLink url="https://www.furaffinity.net/user/ironkayman" label="FurAffinity">
        <img class="furaffinity-logo" src="https://img.icons8.com/?size=512&id=ZHufxSg061dE&format=png" alt="fa">
    </MediaLink>
    <MediaLink url="https://github.com/ironkayman" label="Github">
        <Github height="26" width="26"/>
    </MediaLink>
    <MediaLink url="mailto:lori.j.kayman@gmail.com" label="Email">
        <Mailbox2 height="26" width="26"/>
    </MediaLink>
</div>

<style>

#link-array {
    margin: 0.8rem 0rem;
    height: fit-content;
    gap: 0.8rem;
    display: flex;
    align-items: center;
    vertical-align: middle;
    flex-direction: column;
    flex-wrap: wrap;
}

.furaffinity-logo {
    width: 26px;
    height: 26px;
}

</style>