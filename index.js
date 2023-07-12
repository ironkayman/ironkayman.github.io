const contactStyleParity = {
    github: 'url("assets/mp.jpg")',
    email: 'url("assets/bc.jpg")',
    twitter: 'url("assets/hm.jpg")',
    discord: 'url("assets/dc.jpg")',
};

for (let contactCard of document.querySelectorAll('.card-row')) {
    contactCard.addEventListener('mouseenter', event => {
        console.log(event)
        let cv = document.querySelector('.container-showoff');
        console.log(cv)
        let attrMap = event.originalTarget.querySelector('i');

        if (attrMap.hasAttribute('github')) {
            cv.style.backgroundImage = contactStyleParity.github;
            cv.style.backgroundPositionY = '0px';
        } else if (attrMap.hasAttribute('email')) {
            cv.style.backgroundImage = contactStyleParity.email;
            cv.style.backgroundPositionY = '-84px';
            // cv.style.backgroundPositionX = '-54px';
        } else if (attrMap.hasAttribute('twitter')) {
            cv.style.backgroundImage = contactStyleParity.twitter;
            cv.style.backgroundPositionY = '0px';
        } else if (attrMap.hasAttribute('discord')) {
            cv.style.backgroundImage = contactStyleParity.discord;
            cv.style.backgroundPositionY = '0px';
        }
    })
};
