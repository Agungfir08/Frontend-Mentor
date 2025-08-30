interface CalculateAmountResult {
    tipAmount: string;
    totalAmount: string;
}

export function CalculateAmount(
    bill: number,
    tip: number,
    people: number
): CalculateAmountResult {
    if (!bill || !tip || !people || people === 0)
        return {
            tipAmount: '0.00',
            totalAmount: '0.00',
        };

    const tipAmount = (bill * (tip / 100)) / people;
    const totalAmount = bill / people + tipAmount;
    console.log('calculate amount');

    return {
        tipAmount: tipAmount.toFixed(2),
        totalAmount: totalAmount.toFixed(2),
    };
}
