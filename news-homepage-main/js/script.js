const menuButton = document.getElementById('menu-toggle');

function toggleMenu(event) {
    const button = event.currentTarget;
    const buttonImage = button.querySelector('img');
    const overlay = document.querySelector('.overlay');
    const navLinks = document.getElementById('nav-links');
    const isMenuOpen = buttonImage.src.includes('icon-menu.svg');

    if (isMenuOpen) {
        button.setAttribute('aria-expanded', 'true');
        buttonImage.src = './assets/images/icon-menu-close.svg';
        buttonImage.alt = 'Close menu icon';
        buttonImage.style.height = '24px';
        buttonImage.style.position = 'fixed';
        buttonImage.style.top = '25px';
        buttonImage.style.right = '30px';
        navLinks.classList.add('appear');
        overlay.classList.remove('hidden');
        overlay.setAttribute('aria-hidden', 'false');
    } else {
        button.setAttribute('aria-expanded', 'false');
        buttonImage.src = './assets/images/icon-menu.svg';
        buttonImage.style.height = 'auto';
        buttonImage.style.position = 'relative';
        buttonImage.style.top = 'unset';
        buttonImage.style.right = 'unset';
        navLinks.classList.remove('appear');
        overlay.classList.add('hidden');
        overlay.setAttribute('aria-hidden', 'true');
    }
}

menuButton.addEventListener('click', toggleMenu);
