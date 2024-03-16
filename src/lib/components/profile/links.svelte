<script>
    import { Twitter, Github, Mailbox2, } from 'svelte-bootstrap-icons'

    import MediaLink from "./media_link.svelte";
</script>
<div id="links-prev"></div>
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
#links-prev {
    min-height: 8rem;
}
#links-prev::before {
    content: '';
    background-image: url('/img/hm.jpg');
    width: 60%;
    height: 55%;
    rotate: 180deg;
    left: 20%;
    background-size: cover;
    /* background-clip: content-box;
    -webkit-background-clip: content-box; */
    z-index: -1;
    margin-top: -7%;
    background-position: 0% 0%;
    display: block;
    position: absolute;
}

#link-array {
    margin: 0.8rem 0rem;
    height: fit-content;
    gap: 0.8rem;
    display: flex;
    align-items: center;
    vertical-align: middle;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}

.furaffinity-logo {
    width: 26px;
    height: 26px;
}

</style>