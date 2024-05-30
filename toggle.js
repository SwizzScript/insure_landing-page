const navToggle = document.getElementById('nav-toggle');
const navBar = document.getElementById('navbar');
const introIMG = document.getElementById('intro_img');
const navBg = document.getElementById('nav-bg');


navBg.style.display = 'none';
if (window.innerWidth < 1000) {
    navBar.style.display = 'none';
} else {
    navBar.style.display = 'flex';
}

window.addEventListener('resize', () => {
    // navBg.style.display = 'none';
    if (window.innerWidth < 1000) {
        // navBar.style.display = 'none';
        introIMG.src = "./images/image-intro-mobile.jpg"
    } else {
        navBar.style.display = 'flex';
        introIMG.src = "./images/image-intro-desktop.jpg"
        navBg.style.display = 'none';
        navBar.style.display = 'none';
        navToggle.setAttribute('switch', 'closed');
        navToggle.src = './images/icon-hamburger.svg';
    }
});

navToggle.addEventListener('click', () => {
    if (navToggle.getAttribute('switch') === 'closed') {
        navBar.style.display = 'flex';
        navToggle.setAttribute('switch', 'opened');
        navToggle.src = './images/icon-close.svg';
        navBg.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    } else {
        navBar.style.display = 'none';
        navBg.style.display = 'none';
        navToggle.setAttribute('switch', 'closed');
        navToggle.src = './images/icon-hamburger.svg';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        document.body.style.overflow = 'auto';
    }
})
