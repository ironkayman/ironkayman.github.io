<script>
    import { Twitter, Github, Mailbox2, } from 'svelte-bootstrap-icons'

    import MediaLink from "./media_link.svelte";
</script>

<div class="link-array-warpper">
    <div class="link-array">
        <MediaLink url="https://twitter.com/ironkayman" label="Twitter">
            <Twitter height="42" width="42"/>
        </MediaLink>
        <MediaLink url="https://www.furaffinity.net/user/ironkayman" label="FurAffinity">
            <img class="furaffinity-logo" src="https://fontawesomeicons.com/lib/svg/furaffinity.svg" alt="fa">
        </MediaLink>
        <MediaLink url="https://github.com/ironkayman" label="Github">
            <Github height="42" width="42"/>
        </MediaLink>
        <MediaLink url="mailto:lori.j.kayman@gmail.com" label="Email">
            <Mailbox2 height="42" width="42"/>
        </MediaLink>
    </div>
</div>


<style>

.link-array {
    padding: 2rem 0rem;
    /* margin: 0.8rem 0rem; */
    height: fit-content;
    gap: 0.8rem;
    display: flex;
    align-items: center;
    vertical-align: middle;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
}

.link-array-warpper{
    /* background: hsl(236, 16%, 33%); */
    background-image: url("/img/mnt.png");
    animation: show 160s infinite;
    -webkit-animation: show 160s infinite;
    /* height: 60vh; */
}

@-webkit-keyframes show {
    0%      {background-position: 12% 45%;}
    40%     {background-position: 18% 60%;}
    50%    {background-position: 50% 70%;}
    60%    {background-position: 75% 60%;}
    80%    {background-position: 80% 45%;}
    90%    {background-position: 40% 40%;}
    100%    {background-position: 12% 45%;}
}

@keyframes show {
    0%      {background-position: 10% 45%;}
    40%     {background-position: 15% 60%;}
    50%    {background-position: 50% 70%;}
    60%    {background-position: 75% 60%;}
    80%    {background-position: 80% 45%;}
    90%    {background-position: 40% 40%;}
    100%    {background-position: 10% 45%;}
}


@keyframes animate {
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}



/* @-webkit-keyframes spinY
{  
0%   {-webkit-transform: rotateY(0deg); -webkit-transform-origin: 0% 0% 5;}  
100% {-webkit-transform: rotateY(360deg); -webkit-transform-origin: 0% 0% 5;}  
} */


/* .link-array::before {
    content: "";
    background-image: url("/img/links_prev.png");
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-animation: spinX 3s infinite;
    animation: spinX 3s infinite;
} */

.furaffinity-logo {
    width: 42px;
    height: 42px;

    background-image: url();
}

</style>