const submitButton = document.getElementById('submit-button');
const firstnameError = document.getElementById('firstname-error');
const lastnameError = document.getElementById('lastname-error');
const emailError = document.getElementById('email-error');
const queryTypeError = document.getElementById('query-type-error');
const messageError = document.getElementById('message-error');
const consentError = document.getElementById('consent-error');
const inputFirstname = document.getElementById('firstname');
const inputLastname = document.getElementById('lastname');
const inputEmail = document.getElementById('email');
const inputMessage = document.getElementById('message');
const inputQueryType = document.querySelectorAll('input[name="query-type"]');
const cardSuccessMessage = document.getElementById('card-success-message');

console.log(cardSuccessMessage);

function submitForm(event) {
    event.preventDefault();

    const form = document.getElementById('contact-form');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log('Form data:', data);

    if (validateForm(data)) {
        console.log('Form submitted successfully:', data);
        form.reset();
        resetErrors();
        cardSuccessMessage.classList.add('appear');
        setTimeout(() => {
            cardSuccessMessage.classList.remove('appear');
        }, 3000);
    } else {
        console.error('Form validation failed');
    }
}

function handleRadioChange(event) {
    const selectedRadio = event.target;
    inputQueryType.forEach((radio) => {
        radio.setAttribute('aria-checked', radio === selectedRadio);
    });
}

function validateForm(data) {
    let isValid = true;

    if (!data.firstname) {
        firstnameError.classList.remove('hidden');
        firstnameError.textContent = 'This field is required.';
        inputFirstname.classList.add('error');
        isValid = false;
    } else {
        firstnameError.classList.add('hidden');
        inputFirstname.classList.remove('error');
    }

    if (!data.lastname) {
        lastnameError.classList.remove('hidden');
        lastnameError.textContent = 'This field is required.';
        inputLastname.classList.add('error');
        isValid = false;
    } else {
        lastnameError.classList.add('hidden');
        inputLastname.classList.remove('error');
    }

    if (!/\S+@\S+\.\S+/.test(data.email)) {
        emailError.classList.remove('hidden');
        emailError.textContent = 'Please enter a valid email address.';
        inputEmail.classList.add('error');
        isValid = false;
    }

    if (!data.email) {
        emailError.classList.remove('hidden');
        emailError.textContent = 'This field is required.';
        inputEmail.classList.add('error');
        isValid = false;
    }

    if (data.email && /\S+@\S+\.\S+/.test(data.email)) {
        emailError.classList.add('hidden');
        inputEmail.classList.remove('error');
    }

    if (!data['query-type']) {
        queryTypeError.classList.remove('hidden');
        queryTypeError.textContent = 'Please select a query type.';
        isValid = false;
    } else {
        queryTypeError.classList.add('hidden');
    }

    if (!data.message) {
        messageError.classList.remove('hidden');
        messageError.textContent = 'This field is required.';
        inputMessage.classList.add('error');
        isValid = false;
    } else {
        messageError.classList.add('hidden');
        inputMessage.classList.remove('error');
    }

    if (!data.consent) {
        consentError.classList.remove('hidden');
        consentError.textContent =
            'To submit the form, you must consent to being contacted.';
        isValid = false;
    } else {
        consentError.classList.add('hidden');
    }

    return isValid;
}

function resetErrors() {
    firstnameError.classList.add('hidden');
    lastnameError.classList.add('hidden');
    emailError.classList.add('hidden');
    queryTypeError.classList.add('hidden');
    messageError.classList.add('hidden');
    consentError.classList.add('hidden');
    inputFirstname.classList.remove('error');
    inputLastname.classList.remove('error');
    inputEmail.classList.remove('error');
    inputMessage.classList.remove('error');
}

inputQueryType.forEach((radio) => {
    radio.addEventListener('change', handleRadioChange);
});

submitButton.addEventListener('click', submitForm);
