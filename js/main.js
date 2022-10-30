const nav = document.querySelector('.navigation-list');
const navBtn = document.querySelector('.nav__button');
const navBtnImg = document.querySelector('.fa-bars');

// ID не используют для js, также используют классы
navBtn.onclick = () => {
    if (nav.classList.toggle('navigation-list--open')) {
        navBtnImg.className = "fa-solid fa-xmark fa-2x";
    } else {
        navBtnImg.className = "fa-solid fa-bars fa-2x";
    }
}
