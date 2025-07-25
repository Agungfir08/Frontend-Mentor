const ratingButtons = document.querySelectorAll('.rating-button');
const submitButton = document.getElementById('submit-button');
const selectedRatingText = document.getElementById('selected-rating');
const cardRating = document.querySelector('.card');
const cardSuccess = document.querySelector('.card-success');

let ratingValue;

function selectedRating(event) {
    const selectedButtonRating = event.target;

    ratingButtons.forEach((button) => {
        button.classList.remove('selected');
    });
    selectedButtonRating.classList.add('selected');
    selectedButtonRating.setAttribute('aria-pressed', 'true');
    ratingValue = selectedButtonRating.dataset.rating;
}

function submitRating() {
    if (!ratingValue) {
        alert('Please select a rating before submitting.');
        return;
    }
    cardRating.classList.add('hidden');
    cardSuccess.classList.remove('hidden');
    selectedRatingText.textContent = `You Selected ${ratingValue} out of ${ratingButtons.length}`;

    setTimeout(() => {
        cardRating.classList.remove('hidden');
        cardSuccess.classList.add('hidden');
        resetRating();
    }, 3000);
}

function resetRating() {
    ratingButtons.forEach((button) => {
        button.classList.remove('selected');
    });
    selectedRatingText.textContent = '';
}

ratingButtons.forEach((button) => {
    button.addEventListener('click', selectedRating);
});

submitButton.addEventListener('click', submitRating);
