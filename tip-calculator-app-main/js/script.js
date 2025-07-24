const inputBill = document.getElementById('bill');
const inputPeople = document.getElementById('people');
const inputCustom = document.getElementById('custom-tip');
const resetButton = document.getElementById('reset-button');
const tipAmount = document.querySelector('.tip-amount h1');
const tipTotal = document.querySelector('.tip-total h1');
const tipButtons = document.querySelectorAll('.tip-button');
const errorMessage = document.querySelector('.error-message');

let tipPercentage = 0;

function calculatedTip(bill, percentage, people) {
    return (bill * percentage) / 100 / people;
}

function calculatedTipTotal(tipAmount, people, bill) {
    return bill / people + tipAmount;
}

function selectTipButton(event) {
    const selectTipButton = event.target;

    tipButtons.forEach((button) => {
        button.classList.remove('active');
    });
    selectTipButton.classList.add('active');
    tipPercentage = parseFloat(selectTipButton.dataset.tip);
    inputCustom.value = '';
    splitTip();
}

function resetTipButton() {
    tipButtons.forEach((button) => {
        button.classList.remove('active');
    });
}

function resetFields() {
    inputBill.value = '';
    inputPeople.value = '';
    inputCustom.value = '';
    tipAmount.textContent = '$0';
    tipTotal.textContent = '$0';
    errorMessage.textContent = '';
    tipPercentage = 0;
    inputPeople.classList.remove('error');
    resetTipButton();
}

function formatCurrency(value) {
    return `$${value === Infinity || isNaN(value) ? 0 : value.toFixed(2)}`;
}

function validateInput(input, errorMessage) {
    const value = parseFloat(input.value);
    if (isNaN(value) || value <= 0) {
        input.classList.add('error');
        errorMessage.textContent = `Can't be zero or negative`;
        return false;
    } else {
        input.classList.remove('error');
        errorMessage.textContent = '';
        return true;
    }
}

function splitTip() {
    const bill = parseFloat(inputBill.value);
    const people = parseInt(inputPeople.value);
    const customTip = parseFloat(inputCustom.value);

    if (!validateInput(inputPeople, errorMessage)) return;

    if (!isNaN(customTip) && customTip > 0) {
        resetTipButton();
        tipPercentage = customTip;
    }

    const tipAmountValue = calculatedTip(bill, tipPercentage, people);
    const totalPerPerson = calculatedTipTotal(tipAmountValue, people, bill);

    tipAmount.textContent = formatCurrency(tipAmountValue);
    tipTotal.textContent = formatCurrency(totalPerPerson);
}

inputBill.addEventListener('input', splitTip);
inputPeople.addEventListener('input', splitTip);
inputCustom.addEventListener('input', splitTip);

resetButton.addEventListener('click', resetFields);

tipButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        selectTipButton(event);
    });
});
