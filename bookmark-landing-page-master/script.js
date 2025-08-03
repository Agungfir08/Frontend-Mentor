/* Menu */
const menuButton = document.getElementById('menu-button');
const menuIcon = menuButton.querySelector('img');
const nav = document.getElementById('nav');
const logo = document.getElementById('logo');

/* Features */
let indexFeature = 0;
const featureButtons = document.querySelectorAll('[id^="button-feature-"]');
const featureImages = document.getElementById('feature-images');
const featureTitle = document.getElementById('feature-title');
const featureDescription = document.getElementById('feature-description');
const features = [
    {
        title: 'Bookmark in one click',
        description:
            'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.',
    },
    {
        title: 'Intelligent search',
        description:
            "Our advanced search feature allows you to find your bookmarks quickly and easily. Just start typing and we'll suggest the best matches.",
    },
    {
        title: 'Share your bookmarks',
        description:
            'Easily share your bookmarks with friends and family. You can create public or private collections and share them with anyone you choose.',
    },
];

/* Accordion Questions */
const accordionButtons = document.querySelectorAll('[id^="question-"]');

/* Contact Us */
const inputEmail = document.getElementById('email');
const submitEmailButton = document.getElementById('contact-us');
const errorMessage = document.getElementById('error-message');
const errorIcon = document.getElementById('error-icon');

function toggleMenu() {
    const isOpen = menuIcon.src.includes('icon-close.svg');
    const logoimg = logo.querySelector('img');
    nav.classList.toggle('top-[-100%]');
    nav.classList.toggle('top-0');

    if (!isOpen) {
        menuIcon.src = './images/icon-close.svg';
        menuButton.setAttribute('aria-expanded', 'true');
        logoimg.style.filter = 'brightness(0) invert(1)';
    } else {
        menuIcon.src = './images/icon-hamburger.svg';
        menuButton.setAttribute('aria-expanded', 'false');
        logoimg.style.filter = 'none';
    }
}

function activeFeatureButton(index) {
    featureButtons.forEach((button) => {
        button.classList.remove(
            'text-gray-900',
            'before:scale-100',
            'font-medium'
        );
        button.classList.add(
            'text-gray-400',
            'before:scale-0',
            'hover:text-red-400'
        );
    });
    featureButtons[index].classList.remove(
        'text-gray-400',
        'before:scale-0',
        'hover:text-red-400'
    );
    featureButtons[index].classList.add(
        'text-gray-900',
        'before:scale-100',
        'font-medium'
    );
}

function changeFeature(index) {
    const previousIndex = indexFeature;
    indexFeature = index;
    featureImages.classList.remove(`-translate-x-[${previousIndex * 100}%]`);
    featureImages.classList.add(`-translate-x-[${indexFeature * 100}%]`);

    featureTitle.classList.add('opacity-0');
    featureDescription.classList.add('opacity-0');
    setTimeout(() => {
        updateFeatureContent(indexFeature);
        featureTitle.classList.remove('opacity-0');
        featureDescription.classList.remove('opacity-0');
    }, 250);

    activeFeatureButton(indexFeature);
}

function updateFeatureContent(index) {
    featureTitle.textContent = features[index].title;
    featureDescription.textContent = features[index].description;
}

function accordionToggle(event) {
    const button = event.currentTarget;
    const buttonIcon = button.querySelector('span img');
    const answer = button.nextElementSibling;
    const showAccordion = button.getAttribute('aria-expanded') === 'false';

    if (showAccordion) {
        button.setAttribute('aria-expanded', 'true');
        buttonIcon.classList.add('rotate-180');
        answer.classList.remove('max-h-0', 'opacity-0', 'cursor-default');
        answer.classList.add(
            'max-h-96',
            'opacity-100',
            'mt-3.5',
            'cursor-text'
        );
    } else {
        button.setAttribute('aria-expanded', 'false');
        buttonIcon.classList.remove('rotate-180');
        answer.classList.remove(
            'max-h-96',
            'opacity-100',
            'mt-3.5',
            'cursor-text'
        );
        answer.classList.add('max-h-0', 'opacity-0', 'cursor-default');
    }
}

function validateEmail() {
    const email = inputEmail.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        inputEmail.classList.add('outline-2', 'outline-red-400');
        errorMessage.textContent = 'Please enter your email address';
        errorMessage.classList.remove('hidden');
        errorIcon.classList.remove('hidden');
        return;
    } else if (!emailPattern.test(email)) {
        inputEmail.classList.add('outline-2', 'outline-red-400');
        errorMessage.textContent = "Whoops! Make sure it's an email";
        errorMessage.classList.remove('hidden');
        errorIcon.classList.remove('hidden');
        return;
    } else {
        inputEmail.classList.remove('outline-2', 'outline-red-400');
        errorMessage.classList.add('hidden');
        errorIcon.classList.add('hidden');
        errorMessage.textContent = '';
        inputEmail.value = '';
        return;
    }
}

/* Eventlisteners */
menuButton.addEventListener('click', toggleMenu);
featureButtons.forEach((button, index) => {
    button.addEventListener('click', () => changeFeature(index));
});
accordionButtons.forEach((button) => {
    button.addEventListener('click', accordionToggle);
});
submitEmailButton.addEventListener('click', validateEmail);
inputEmail.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        validateEmail();
    }
});

activeFeatureButton(indexFeature);
updateFeatureContent(indexFeature);
