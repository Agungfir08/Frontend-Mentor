const navigationButton = document.getElementById('navigation-button');
const navigation = document.getElementById('navigation');

function toggleNavigation() {
    console.log('Toggle Navigation');
    const buttonIcon = navigationButton.querySelector('img');
    const isClosed = buttonIcon.src.includes('icon-hamburger.svg');

    if (isClosed) {
        buttonIcon.src = './assets/shared/icon-close.svg';
        navigation.classList.remove('header__nav--closed');
        navigationButton.setAttribute('aria-expanded', 'true');
    } else {
        buttonIcon.src = './assets/shared/icon-hamburger.svg';
        navigation.classList.add('header__nav--closed');
        navigationButton.setAttribute('aria-expanded', 'false');
    }
}
navigationButton.addEventListener('click', toggleNavigation);
