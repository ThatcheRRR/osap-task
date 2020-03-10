const practice = document.querySelector('.practice-link');
const menu = document.querySelector('.practice-menu');
const header = document.querySelector('header');
const sidebar = document.querySelector('.sidebar');
const link = document.querySelectorAll('h2');
const text = document.querySelectorAll('.text');
const svg = document.querySelector("#Capa_1");
const path = document.querySelector("#Capa_1 > g > g > path");

function openPractice(e) {
    if (e.target === practice || e.target === svg || e.target === path) {
        practice.classList.toggle('toggled');
        menu.classList.toggle('showMenu')
    } else {
        practice.classList.remove('toggled');
        menu.classList.remove('showMenu');
    }
}

function changePosition() {
    if (window.pageYOffset > 50) {
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
}

function showContent(e) {
    e.target.nextElementSibling.classList.toggle('showText');
    e.target.classList.toggle('anim');
}

document.onclick = openPractice;
window.onload = changePosition;
document.onscroll = changePosition;
for (let i = 0; i < link.length; i++) {
    link[i].onclick = showContent;
}
