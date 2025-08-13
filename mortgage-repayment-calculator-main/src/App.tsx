import { useState } from 'react';
import InputNumber from './components/input';
import CalculatorIcon from './assets/images/icon-calculator.svg';
import Empty from './components/empty';
import Result from './components/result';
import {
    calculateMonthlyRepayment,
    calculateTotalRepayment,
} from './utils/utils';

interface MortgageFormData {
    mortgageAmount: string;
    mortgageTerm: string;
    interestRate: string;
    mortgageType: string;
}

interface FormErrors {
    mortgageAmount: boolean;
    mortgageTerm: boolean;
    interestRate: boolean;
    mortgageType: boolean;
}

export default function App() {
    const initialState: MortgageFormData = {
        mortgageAmount: '',
        mortgageTerm: '',
        interestRate: '',
        mortgageType: '',
    };

    const errorInitialState: FormErrors = {
        mortgageAmount: false,
        mortgageTerm: false,
        interestRate: false,
        mortgageType: false,
    };

    const [value, setValue] = useState<MortgageFormData>(initialState);
    const [errors, setErrors] = useState<FormErrors>(errorInitialState);
    const [monthlyRepayment, setMonthlyRepayment] = useState<number | null>(
        null
    );
    const [totalRepayment, setTotalRepayment] = useState<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValue((prev) => ({ ...prev, [name]: value }));

        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: false }));
        }
    };

    const clearValues = () => {
        setValue(initialState);
        setErrors(errorInitialState);
        setMonthlyRepayment(null);
        setTotalRepayment(null);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newError: FormErrors = {
            mortgageAmount: !value.mortgageAmount,
            mortgageTerm: !value.mortgageTerm,
            interestRate: !value.interestRate,
            mortgageType: !value.mortgageType,
        };

        setErrors(newError);

        if (!Object.values(newError).includes(true)) {
            const principal = parseFloat(value.mortgageAmount);
            const term = parseFloat(value.mortgageTerm);
            const interest = parseFloat(value.interestRate);
            const isInterestOnly = value.mortgageType === 'interestOnly';

            const monthlyRepayment = calculateMonthlyRepayment(
                principal,
                term,
                interest,
                isInterestOnly
            );
            const totalRepayment = calculateTotalRepayment(
                monthlyRepayment,
                term
            );
            setMonthlyRepayment(monthlyRepayment);
            setTotalRepayment(totalRepayment);
        }

        return;
    };

    return (
        <main className="flex justify-center items-center min-h-dvh">
            <section className="grid grid-cols-1 lg:grid-cols-2 lg:rounded-2xl lg:overflow-hidden lg:w-fit max-w-5xl bg-white">
                <div className="bg-white p-6 space-y-7">
                    <div className="flex flex-col gap-2.5 items-start lg:flex-row lg:justify-between lg:items-center">
                        <h1 className="text-2xl font-bold text-slate-900">
                            Mortgage Calculator
                        </h1>
                        <button
                            type="button"
                            className="text-slate-700 underline underline-offset-2 font-medium cursor-pointer"
                            onClick={clearValues}>
                            Clear All
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <InputNumber
                            iconPosition="left"
                            iconText="£"
                            name="Mortgage Amount"
                            value={value.mortgageAmount}
                            onChange={handleChange}
                            error={errors.mortgageAmount}
                        />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                            <InputNumber
                                iconPosition="right"
                                iconText="years"
                                name="Mortgage Term"
                                value={value.mortgageTerm}
                                onChange={handleChange}
                                error={errors.mortgageTerm}
                            />
                            <InputNumber
                                iconPosition="right"
                                iconText="%"
                                name="Interest Rate"
                                value={value.interestRate}
                                onChange={handleChange}
                                error={errors.interestRate}
                            />
                        </div>
                        <fieldset className="space-y-3">
                            <legend className="text-base text-slate-700 font-medium">
                                Mortgage Type
                            </legend>
                            <div className="grid grid-cols-1 gap-3">
                                <label className="border border-slate-500 rounded-md font-bold text-slate-900 text-lg py-3 pl-5 has-checked:bg-lime/20 has-checked:border-lime lg:hover:border-lime cursor-pointer">
                                    <input
                                        type="radio"
                                        name="mortgageType"
                                        value="repayment"
                                        onChange={handleChange}
                                        checked={
                                            value.mortgageType === 'repayment'
                                        }
                                        className="mr-3.5 "
                                    />
                                    Repayment
                                </label>
                                <label className="border border-slate-500 rounded-md font-bold text-slate-900 text-lg py-3 pl-5 has-checked:bg-lime/20 has-checked:border-lime lg:hover:border-lime cursor-pointer">
                                    <input
                                        type="radio"
                                        name="mortgageType"
                                        value="interestOnly"
                                        onChange={handleChange}
                                        checked={
                                            value.mortgageType ===
                                            'interestOnly'
                                        }
                                        className="mr-3.5 "
                                    />
                                    Interest Only
                                </label>
                            </div>
                            {errors.mortgageType && (
                                <p className="text-red text-sm">
                                    This field is required
                                </p>
                            )}
                        </fieldset>
                        <button
                            type="submit"
                            className="flex items-center gap-2 bg-lime rounded-full w-full justify-center py-3.5 font-bold text-lg cursor-pointer hover:bg-lime/80 lg:w-3/4">
                            <span>
                                <img
                                    src={CalculatorIcon}
                                    alt="Calculator Icon"
                                />
                            </span>
                            Calculate Repayments
                        </button>
                    </form>
                </div>
                <div className="bg-slate-900 lg:rounded-bl-[5rem]">
                    {monthlyRepayment !== null && totalRepayment !== null ? (
                        <Result
                            monthlyRepayment={monthlyRepayment}
                            totalRepayment={totalRepayment}
                        />
                    ) : (
                        <Empty />
                    )}
                </div>
            </section>
        </main>
    );
}
