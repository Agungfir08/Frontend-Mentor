const buttons = document.querySelectorAll('.card-question button');
const answers = document.querySelectorAll('#answer');

function toggleAccordion(event, index) {
    const button = event.currentTarget;
    const icon = button.querySelector('img');
    const answer = answers[index];

    button.setAttribute(
        'aria-expanded',
        button.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );

    if (button.getAttribute('aria-expanded') === 'true') {
        answer.classList.remove('hidden');
        icon.src = '../assets/images/icon-minus.svg';
        icon.alt = 'minus icon';
    } else {
        answer.classList.add('hidden');
        icon.src = '../assets/images/icon-plus.svg';
        icon.alt = 'plus icon';
    }

    console.log(button, icon);
}

buttons.forEach((button, index) => {
    button.addEventListener('click', (event) => toggleAccordion(event, index));
});
