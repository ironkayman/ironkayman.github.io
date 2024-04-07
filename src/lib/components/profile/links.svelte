<script>
    import { Twitter, Github, Mailbox2, } from 'svelte-bootstrap-icons'

    import MediaLink from "./media_link.svelte";
</script>

<div class="link-array-wrapper">
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
    <div class="wrapper-blur"></div>
</div>


<style>

.link-array {
    padding: 2rem 0rem;
    /* padding-right: -4px; */
    height: fit-content;
    gap: 1.05rem;
    display: flex;
    vertical-align: middle;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 13.3rem;
    margin-left: 1.5rem;
    position: absolute;
    z-index: 2;

    align-items: center;
    width: 100%;
    margin-left: 0px;
}

.link-array-wrapper {
    background-image: url("/img/hll.png");
    animation: show 140s infinite;
    -webkit-animation: show 140s infinite;
    min-height: 64.8vh;
}

.wrapper-blur {
    position: absolute;
    opacity: 0.98;
    z-index: 1;
    top: -20px;
    margin-left: -10px;
    background-color: hsla(1, 1%, 1%, 0.7);
    background-image: url("/img/hll.png");
    --effect: blur(0px) brightness(40%);
    -webkit-filter: var(--effect);
    -moz-filter: var(--effect);
    -o-filter: var(--effect);
    -ms-filter: var(--effect);
    filter: var(--effect);
    height: 110%;
    width: 16.1rem;
    position: absolute;
    animation: show 140s infinite;
    -webkit-animation: show 140s infinite;

    width: 110%;
}

@keyframes show {
    0%      {background-position: 0% 45%;}
    40%     {background-position: 2% 62%;}
    50%    {background-position: 50% 70%;}
    /* 60%    {background-position: 75% 60%;} */
    80%    {background-position: 40% 30%;}
    90%    {background-position: 20% 35%;}
    100%    {background-position: 0% 45%;}
}


@-webkit-keyframes show {
    0%      {background-position: 0% 45%;}
    40%     {background-position: 2% 62%;}
    50%    {background-position: 50% 70%;}
    /* 60%    {background-position: 75% 60%;} */
    80%    {background-position: 40% 30%;}
    90%    {background-position: 20% 35%;}
    100%    {background-position: 0% 45%;}
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