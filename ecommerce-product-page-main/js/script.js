//menu
const menuButton = document.getElementById('menu-button');

//product
const productName = document.getElementById('product-name');

//quantity
const addQuantityButton = document.getElementById('increase-quantity');
const decreaseQuantityButton = document.getElementById('decrease-quantity');
const quantity = document.getElementById('quantity');
const quantityContainer = document.querySelector('.quantity');

// add to cart
const addToCartButton = document.getElementById('add-to-cart');
const cartHeaderButton = document.getElementById('cart-button');
const cartDropdown = document.getElementById('cart-dropdown');
const cartHeader = document.querySelector('.cart-items');
const cartCountHeader = document.getElementById('cart-count');
const cartIconHeader = document.querySelector('#cart-button img');

//price
const currentPrice = document.querySelector('.current-price');

//overlay
const overlay = document.getElementById('overlay');

//carousel images product
const mainImage = document.getElementById('main-image');
const nextImageButton = document.getElementById('next-image');
const previousImageButton = document.getElementById('previous-image');

//carousel lightbox
const lightboxCloseButton = document.getElementById('close-lightbox');
const lightboxContainer = document.querySelector(
    '.image-section.lightbox-mode'
);
const lightboxMainImage = document.getElementById('lightbox-main-image');
const lightboxThumbnailGalleryButton = document.querySelectorAll(
    '[id^="lightbox-thumbnail-"]'
);
const lightboxNextButton = document.querySelector(
    '.image-section.lightbox-mode .image-gallery #next-image'
);
const lightboxPrevButton = document.querySelector(
    '.image-section.lightbox-mode .image-gallery #previous-image'
);

//thumbnail images
const thumbnailImagesButton = document.querySelectorAll('[id^="thumbnail-"]');

//global variable
let currentQuantity = parseInt(quantity.innerHTML) || 0;
let cartItems = [];
let currentIndex = 0;
let lightboxIndex = 0;

// Menu Toggle
function toggleMenu(event) {
    const button = event.currentTarget;
    const buttonIcon = button.querySelector('img');
    const isMenuOpen = buttonIcon.src.includes('icon-menu.svg');
    const navLinks = document.getElementById('nav-links');

    if (isMenuOpen) {
        buttonIcon.src = './images/icon-close.svg';
        button.setAttribute('aria-expanded', 'true');
        button.style.position = 'fixed';
        navLinks.classList.add('appear');
        showOverlay();
    } else {
        buttonIcon.src = './images/icon-menu.svg';
        button.setAttribute('aria-expanded', 'false');
        button.style.position = 'relative';
        navLinks.classList.remove('appear');
        hideOverlay();
    }
}

// Quantity Update
function updateQuantity(event) {
    const button = event.currentTarget;

    if (button.id === 'increase-quantity' && currentQuantity < 99) {
        currentQuantity += 1;
    } else if (button.id === 'decrease-quantity' && currentQuantity > 0) {
        currentQuantity -= 1;
    }
    quantity.innerHTML = currentQuantity;
    quantityContainer.setAttribute('aria-valuenow', currentQuantity);
}

function updateIconCartHeader() {
    if (cartItems.length > 0) {
        cartCountHeader.innerHTML = cartItems.length;
        cartIconHeader.style.filter =
            'brightness(0) saturate(100%) invert(7%) sepia(10%) saturate(1500%) hue-rotate(182deg) brightness(95%) contrast(92%)';
        currentQuantity = 0;
        quantity.innerHTML = currentQuantity;
        cartHeader.classList.remove('hidden');
    } else {
        cartCountHeader.innerHTML = '';
        cartIconHeader.style.filter = 'none';
        cartHeader.classList.add('hidden');
    }
}

// Add to Cart
function addToCart() {
    const price = parseFloat(currentPrice.innerHTML.replace('$', ''));
    const totalPrice = (price * currentQuantity).toFixed(2);
    const cartItem = {
        name: productName.innerHTML,
        quantity: currentQuantity,
        price,
        totalPrice,
        image: thumbnailImagesButton[0].querySelector('img').src,
    };

    if (currentQuantity === 0) {
        return;
    }

    const existingItemIndex = cartItems.findIndex(
        (item) => item.name === cartItem.name
    );
    if (existingItemIndex > -1) {
        cartItems[existingItemIndex].quantity += cartItem.quantity;
        cartItems[existingItemIndex].totalPrice = (
            cartItems[existingItemIndex].price *
            cartItems[existingItemIndex].quantity
        ).toFixed(2);
    } else {
        cartItems.push(cartItem);
    }
    updateIconCartHeader();
    renderCartItems();
}

function removeItem(event) {
    const button = event.currentTarget;
    const itemIndex = button.getAttribute('data-index');
    cartItems.splice(itemIndex, 1);
    updateIconCartHeader();
    renderCartItems();
}

function renderCartItems() {
    const cartItemsList = document.querySelector('#cart-dropdown .cart-items');
    cartItemsList.innerHTML = '';
    if (cartItems.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.innerHTML = 'Your cart is empty.';
        cartItemsList.appendChild(emptyMessage);
        return;
    } else {
        cartItems.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <img
                    src="${item.image}"
                    alt="Sneaker Thumbnail"
                />

                <div class="item-details">
                    <p>${item.name}</p>
                    <div class="price-item">
                        <span>$${item.price.toFixed(2)} x ${
                item.quantity
            } = </span>
                        <span id="total">$${item.totalPrice}</span>
                    </div>
                </div>

                <button id="remove-item" type="button" data-index="${index}" aria-label="Remove Item">
                    <img
                        src="./images/icon-delete.svg"
                        alt="Delete Icon"
                    />
                </button>
            `;
            cartItemsList.appendChild(cartItem);

            const removeButton = cartItem.querySelector('#remove-item');
            removeButton.addEventListener('click', removeItem);
        });

        const checkoutButton = document.createElement('button');
        checkoutButton.classList.add('checkout-button');
        checkoutButton.innerHTML = 'Checkout';
        checkoutButton.setAttribute('aria-label', 'Checkout');
        checkoutButton.setAttribute('type', 'button');
        cartItemsList.appendChild(checkoutButton);
    }
}

function cartDropdownToggle() {
    cartDropdown.classList.toggle('hidden');

    if (cartDropdown.classList.contains('hidden')) {
        cartHeaderButton.setAttribute('aria-expanded', 'false');
        cartDropdown.setAttribute('aria-hidden', 'true');
    } else {
        cartHeaderButton.setAttribute('aria-expanded', 'true');
        cartDropdown.setAttribute('aria-hidden', 'false');
    }

    renderCartItems();
}

function carouselImages(event, mainImageOfCarousel, isLightbox = false) {
    const target = event.currentTarget;
    const isNext = target.id === 'next-image';
    const isPrevious = target.id === 'previous-image';
    const maxindex = mainImageOfCarousel.children.length;

    let index = isLightbox ? lightboxIndex : currentIndex;

    if (isNext && index < maxindex - 1) {
        index++;
    } else if (isPrevious && index > 0) {
        index--;
    }

    if (isLightbox) {
        lightboxIndex = index;
    } else {
        currentIndex = index;
    }

    slideImage(index, mainImageOfCarousel);

    const thumbnail = isLightbox
        ? lightboxThumbnailGalleryButton
        : thumbnailImagesButton;
    updateThumbnailHighlight(thumbnail, index);
}

function slideImage(index, mainImageOfCarousel) {
    mainImageOfCarousel.style.transform = `translateX(-${index * 100}%)`;
    mainImageOfCarousel.style.transition = 'transform 0.5s ease-in-out';
}

// Thumbnail Image Click
function thumbnailImageClick(
    event,
    thumbnailButton,
    mainImageOfCarousel,
    isLightbox = false
) {
    const target = event.currentTarget;
    const indexOfTarget = Array.from(thumbnailButton).indexOf(target);

    if (isLightbox) {
        lightboxIndex = indexOfTarget;
    } else {
        currentIndex = indexOfTarget;
    }

    slideImage(indexOfTarget, mainImageOfCarousel);
    updateThumbnailHighlight(thumbnailButton, indexOfTarget);
}

function updateThumbnailHighlight(thumbnailButton, index) {
    const activeThumbnail = thumbnailButton[index];
    thumbnailButton.forEach((thumbnail) => {
        thumbnail.style.border = 'none';
        const image = thumbnail.querySelector('img');
        image.style.opacity = '1';
        thumbnail.setAttribute('aria-selected', 'false');
    });

    if (activeThumbnail) {
        activeThumbnail.style.border = '3px solid var(--Orange)';
        activeThumbnail.setAttribute('aria-selected', 'true');
        const image = activeThumbnail.querySelector('img');
        image.style.opacity = '0.5';
    }
}

function lightboxOpen() {
    lightboxContainer.classList.remove('hidden');
    lightboxContainer.setAttribute('aria-hidden', 'false');
    showOverlay();
}

function closeLightbox() {
    lightboxContainer.classList.add('hidden');
    lightboxContainer.setAttribute('aria-hidden', 'true');
    currentIndex = lightboxIndex;
    hideOverlay();
    slideImage(currentIndex, mainImage);
    updateThumbnailHighlight(thumbnailImagesButton, currentIndex);
}

function showOverlay() {
    overlay.classList.remove('close');
    overlay.setAttribute('aria-hidden', 'false');
}

function hideOverlay() {
    overlay.classList.add('close');
    overlay.setAttribute('aria-hidden', 'true');
}

menuButton.addEventListener('click', toggleMenu);
addQuantityButton.addEventListener('click', updateQuantity);
decreaseQuantityButton.addEventListener('click', updateQuantity);
addToCartButton.addEventListener('click', addToCart);
cartHeaderButton.addEventListener('click', cartDropdownToggle);
nextImageButton.addEventListener('click', (event) =>
    carouselImages(event, mainImage)
);
previousImageButton.addEventListener('click', (event) =>
    carouselImages(event, mainImage)
);
thumbnailImagesButton.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (event) =>
        thumbnailImageClick(event, thumbnailImagesButton, mainImage)
    );
});

lightboxThumbnailGalleryButton.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (event) =>
        thumbnailImageClick(
            event,
            lightboxThumbnailGalleryButton,
            lightboxMainImage,
            true
        )
    );
});
mainImage.addEventListener('click', lightboxOpen);
lightboxCloseButton.addEventListener('click', closeLightbox);

lightboxNextButton.addEventListener('click', (event) =>
    carouselImages(event, lightboxMainImage, true)
);

lightboxPrevButton.addEventListener('click', (event) =>
    carouselImages(event, lightboxMainImage, true)
);

updateThumbnailHighlight(thumbnailImagesButton, currentIndex);
updateThumbnailHighlight(lightboxThumbnailGalleryButton, lightboxIndex);
