const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav__button');
const navBtnImg = document.querySelector('#nav__button-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('nav__list--open')) {
        navBtnImg.src = "./img/nav-close.svg";
    } else {
        navBtnImg.src = './img/nav.svg';
    }
}