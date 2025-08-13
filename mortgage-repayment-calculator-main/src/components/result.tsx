import { Currency } from '../utils/utils';

export default function Result({
    monthlyRepayment,
    totalRepayment,
}: {
    monthlyRepayment: number;
    totalRepayment: number;
}) {
    return (
        <div className="p-6 space-y-4 md:space-y-6">
            <h2 className="font-bold text-2xl text-white">Your results</h2>
            <p className="font-medium text-slate-500 text-base">
                Your results are shown below base on the information you
                provided. To adjust the results, edit the form and click
                "calculate repayments" again.
            </p>

            <div className="px-4 py-5 rounded-lg space-y-3.5 bg-slate-950 border-t-2 border-lime">
                <div className="space-y-1">
                    <h3 className="font-medium text-slate-500 text-base">
                        Your monthly repayments
                    </h3>
                    <p className="text-lime text-4.5xl font-bold md:text-5.5xl">
                        {Currency(monthlyRepayment)}
                    </p>
                </div>
                <div className="w-full h-px bg-slate-500 relative"></div>
                <div className="space-y-1">
                    <h3 className="font-medium text-slate-500 text-base">
                        Total you'll repay over the term
                    </h3>
                    <p className="text-white text-2xl font-bold">
                        {Currency(totalRepayment)}
                    </p>
                </div>
            </div>
        </div>
    );
}
