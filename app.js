const practice = document.querySelector('.practice-link');
const menu = document.querySelector('.practice-menu');
const header = document.querySelector('header');

function openPractice(e) {
    practice.classList.toggle('toggled');
    if (practice.classList.contains('toggled')) {
        menu.style.transform = 'scaleY(1)';
        menu.style.opacity = '1';
    } else {
        practice.classList.remove('toggled');
        menu.style.transform = 'scaleY(0)';
        menu.style.opacity = '0';
    }
    if (e.target !== practice) {
        practice.classList.remove('toggled');
        menu.style.transform = 'scaleY(0)';
        menu.style.opacity = '0';
    }
}

function changePosition() {
    if (window.pageYOffset > 50) {
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
}

document.addEventListener('scroll', changePosition);
document.addEventListener('click', openPractice);
