const form = document.getElementById('signup-form');
const btndismissMessage = document.getElementById('dismiss-btn');

function validateEmail(email) {
    if (!email) {
        return 'Please enter your email address.';
    }
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email) ? '' : 'Please provide a valid email address.';
}

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(form).entries();
    const { email } = Object.fromEntries(formData);

    const errorMessage = validateEmail(email);

    const errorElement = document.querySelector('.error-message');
    const inputElement = document.getElementById('email');

    if (errorMessage) {
        errorElement.innerText = errorMessage;
        inputElement.classList.add('error');
    } else {
        errorElement.innerText = '';
        inputElement.classList.remove('error');
        form.reset();
        window.location.href = 'success.html';
    }
}

if (form) {
    form.addEventListener('submit', handleSubmit);
}

if (btndismissMessage) {
    btndismissMessage.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}
