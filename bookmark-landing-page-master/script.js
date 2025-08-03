/* Menu */
const menuButton = document.getElementById("menu-button");
const menuIcon = menuButton.querySelector("img");
const nav = document.getElementById("nav");
const logo = document.getElementById("logo");

/* Features */
let indexFeature = 0;
const featureButtons = document.querySelectorAll('[id^="button-feature-"]');
const featureImages = document.getElementById("feature-images");
const featureAllImages = document.querySelectorAll("[id^='feature-image-']");
const featureTitle = document.getElementById("feature-title");
const featureDescription = document.getElementById("feature-description");
const features = [
    {
        title: "Bookmark in one click",
        description:
            "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.",
    },
    {
        title: "Intelligent search",
        description:
            "Our advanced search feature allows you to find your bookmarks quickly and easily. Just start typing and we'll suggest the best matches.",
    },
    {
        title: "Share your bookmarks",
        description:
            "Easily share your bookmarks with friends and family. You can create public or private collections and share them with anyone you choose.",
    },
];

/* Accordion Questions */
const accordionButtons = document.querySelectorAll('[id^="question-"]');

/* Contact Us */
const inputEmail = document.getElementById("email");
const submitEmailButton = document.getElementById("contact-us");
const errorMessage = document.getElementById("error-message");
const errorIcon = document.getElementById("error-icon");

function toggleMenu() {
    const isOpen = menuIcon.src.includes("icon-close.svg");
    const logoimg = logo.querySelector("img");
    nav.classList.toggle("top-[-100%]");
    nav.classList.toggle("top-0");

    if (!isOpen) {
        menuIcon.src = "./images/icon-close.svg";
        menuButton.setAttribute("aria-expanded", "true");
        logoimg.style.filter = "brightness(0) invert(1)";
    } else {
        menuIcon.src = "./images/icon-hamburger.svg";
        menuButton.setAttribute("aria-expanded", "false");
        logoimg.style.filter = "none";
    }
}

function activeFeatureButton(index) {
    const activeClasses = ["text-gray-900", "before:scale-100", "font-medium"];
    const inactiveClasses = [
        "text-gray-400",
        "before:scale-0",
        "hover:text-red-400",
    ];

    featureButtons.forEach((button) => {
        button.classList.remove(...activeClasses);
        button.classList.add(...inactiveClasses);
        button.setAttribute("aria-selected", "false");
    });
    featureButtons[index].classList.remove(...inactiveClasses);
    featureButtons[index].classList.add(...activeClasses);
    featureButtons[index].setAttribute("aria-selected", "true");
}

function changeFeature(index) {
    indexFeature = index;
    featureImages.classList.remove(
        "translate-x-feature-1",
        "translate-x-feature-2",
        "translate-x-feature-3",
    );

    if (indexFeature === 0) {
        featureImages.classList.add("translate-x-feature-1");
    } else if (indexFeature === 1) {
        featureImages.classList.add("translate-x-feature-2");
    } else if (indexFeature === 2) {
        featureImages.classList.add("translate-x-feature-3");
    }

    featureTitle.classList.add("opacity-0");
    featureDescription.classList.add("opacity-0");
    setTimeout(() => {
        updateFeatureContent(indexFeature);
        featureTitle.classList.remove("opacity-0");
        featureDescription.classList.remove("opacity-0");
    }, 250);

    updateAttributeImages(indexFeature);
    activeFeatureButton(indexFeature);
}

function updateAttributeImages(idx) {
    featureAllImages.forEach((image, index) => {
        image.setAttribute("aria-hidden", index === idx);
    });
    console.log(featureAllImages);
}

function updateFeatureContent(index) {
    featureTitle.textContent = features[index].title;
    featureDescription.textContent = features[index].description;
}

function accordionToggle(event) {
    const button = event.currentTarget;
    const buttonIcon = button.querySelector("span img");
    const answer = button.nextElementSibling;
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    const expandedClass = ["max-h-96", "opacity-100", "mt-3.5", "cursor-text"];
    const collapsedClass = ["max-h-0", "opacity-0", "cursor-default"];

    if (!isExpanded) {
        button.setAttribute("aria-expanded", "true");
        buttonIcon.classList.add("rotate-180");
        answer.classList.remove(...collapsedClass);
        answer.classList.add(...expandedClass);
    } else {
        button.setAttribute("aria-expanded", "false");
        buttonIcon.classList.remove("rotate-180");
        answer.classList.remove(...expandedClass);
        answer.classList.add(...collapsedClass);
    }
}

function validateEmail() {
    const email = inputEmail.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        showErrorMessage("Please enter your email address");
    } else if (!emailPattern.test(email)) {
        showErrorMessage("Whoops! Make sure it's an email");
    } else {
        inputEmail.classList.remove("outline-2", "outline-red-400");
        errorMessage.classList.add("hidden");
        errorIcon.classList.add("hidden");
        errorMessage.textContent = "";
        inputEmail.value = "";
        return;
    }
}

function showErrorMessage(message) {
    inputEmail.classList.add("outline-2", "outline-red-400");
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
    errorIcon.classList.remove("hidden");
}

/* Eventlisteners */
menuButton.addEventListener("click", toggleMenu);
featureButtons.forEach((button, index) => {
    button.addEventListener("click", () => changeFeature(index));
});
accordionButtons.forEach((button) => {
    button.addEventListener("click", accordionToggle);
});
submitEmailButton.addEventListener("click", validateEmail);
inputEmail.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        validateEmail();
    }
});

activeFeatureButton(indexFeature);
updateFeatureContent(indexFeature);
updateAttributeImages(indexFeature);
