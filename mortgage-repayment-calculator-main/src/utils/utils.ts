export function Currency(value: number) {
    return value.toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP',
    });
}

export function calculateMonthlyRepayment(
    principal: number,
    term: number,
    interest: number,
    isInterestOnly: boolean
) {
    const termInMonths = term * 12;
    const monthlyInterestRate = interest / 100 / 12;

    if (isNaN(principal) || isNaN(termInMonths) || isNaN(monthlyInterestRate)) {
        return 0;
    }

    if (isInterestOnly) {
        return principal * monthlyInterestRate;
    }

    return (
        (principal * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -termInMonths))
    );
}

export function calculateTotalRepayment(monthrepayment: number, term: number) {
    const termInMonths = term * 12;
    return monthrepayment * termInMonths;
}
