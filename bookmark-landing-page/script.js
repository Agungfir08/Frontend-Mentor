/* Menu */
const menuButton = document.getElementById("menu-button");
const menuIcon = menuButton.querySelector("img");
const nav = document.getElementById("nav");

/* Features */
let indexFeature = 0;
const featureButtons = document.querySelectorAll('[id^="button-feature-"]');
const featureImages = document.getElementById("feature-images");
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

function toggleMenu() {
    const isOpen = menuIcon.src.includes("icon-close.svg");
    nav.classList.toggle("top-[-100%]");
    nav.classList.toggle("top-0");

    if (!isOpen) {
        menuIcon.src = "./images/icon-close.svg";
        menuButton.setAttribute("aria-expanded", "true");
    } else {
        menuIcon.src = "./images/icon-hamburger.svg";
        menuButton.setAttribute("aria-expanded", "false");
    }
}

function activeFeatureButton(index) {
    featureButtons.forEach((button) => {
        button.classList.remove("text-gray-900", "before:scale-100");
        button.classList.add("text-gray-400", "before:scale-0");
    });
    featureButtons[index].classList.remove("text-gray-400", "before:scale-0");
    featureButtons[index].classList.add("text-gray-900", "before:scale-100");
}

function changeFeature(index) {
    const previousIndex = indexFeature;
    indexFeature = index;
    featureImages.classList.remove(`-translate-x-[${previousIndex * 100}%]`);
    featureImages.classList.add(`-translate-x-[${indexFeature * 100}%]`);

    featureTitle.classList.add("opacity-0");
    featureDescription.classList.add("opacity-0");
    setTimeout(() => {
        updateFeatureContent(indexFeature);
        featureTitle.classList.remove("opacity-0");
        featureDescription.classList.remove("opacity-0");
    }, 250);

    activeFeatureButton(indexFeature);
}

function updateFeatureContent(index) {
    featureTitle.textContent = features[index].title;
    featureDescription.textContent = features[index].description;
}

menuButton.addEventListener("click", toggleMenu);
featureButtons.forEach((button, index) => {
    button.addEventListener("click", () => changeFeature(index));
});

activeFeatureButton(indexFeature);
updateFeatureContent(indexFeature);
