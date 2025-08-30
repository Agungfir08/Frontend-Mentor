interface CalculateAmountResult {
    tipAmount: string;
    totalAmount: string;
}

export function CalculateAmount(
    bill: number,
    tip: number,
    people: number
): CalculateAmountResult | undefined {
    if (!bill || !tip || !people || people === 0) return;

    const tipAmount = (bill * (tip / 100)) / people;
    const totalAmount = bill / people + tipAmount;

    return {
        tipAmount: tipAmount.toFixed(2),
        totalAmount: totalAmount.toFixed(2),
    };
}
