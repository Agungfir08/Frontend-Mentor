const button = document.querySelectorAll('.card-user .timeframe button');

const activeButton = [...button].find((btn) => btn.dataset.active === 'true');

let dashboardData;

fetch('./data.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        dashboardData = data;
        updateCards(dashboardData, activeButton.id);
    })
    .catch((error) => console.error('Error fetching data:', error));

button.forEach((btn) => {
    btn.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
    const clickedButton = event.target;
    button.forEach((btn) => {
        btn.removeAttribute('data-active');
    });
    clickedButton.setAttribute('data-active', 'true');
    const timeframe = clickedButton.id;
    updateCards(dashboardData, timeframe);
}

function updateCards(data, timeframe) {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        const userData = data[index];
        const currentTime = userData.timeframes[timeframe].current;
        const previousTime = userData.timeframes[timeframe].previous;

        card.querySelector(
            '.card-content .card-time .current-time'
        ).textContent = `${currentTime}hrs`;
        card.querySelector(
            '.card-content .card-time .previous-time'
        ).textContent = `Last ${
            timeframe.charAt(0).toUpperCase() + timeframe.slice(1)
        }-${previousTime}hrs`;
    });
}
