const navButton = document.querySelector('.header__button');
const header = document.querySelector('.header');
const navMenu = document.getElementById('nav-link');

function openNavigationMenu(event) {
    const button = event.currentTarget;
    const buttonIcon = button.querySelector('img');
    const isOpened = navMenu.classList.contains('header__nav--open');
    if (isOpened) {
        navMenu.classList.remove('header__nav--open');
        button.setAttribute('aria-expanded', 'false');
        buttonIcon.src = 'images/icon-hamburger.svg';
        buttonIcon.alt = 'Open Navigation Menu';
        header.style.position = 'absolute';
    } else {
        navMenu.classList.add('header__nav--open');
        button.setAttribute('aria-expanded', 'true');
        buttonIcon.src = 'images/icon-close.svg';
        buttonIcon.alt = 'Close Navigation Menu';
        header.style.position = 'absolute';
    }
}

navButton.addEventListener('click', openNavigationMenu);
