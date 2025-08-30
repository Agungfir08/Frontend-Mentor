import Logo from './assets/logo.svg';
import DollarIcon from './assets/icon-dollar.svg';
import PeopleIcon from './assets/icon-person.svg';
import InputNumber from './components/InputNumber.tsx';
import InputRadio from './components/InputRadio.tsx';
import { useState } from 'react';
import ResultDisplay from './components/ResultDisplay.tsx';
import { CalculateAmount } from './utils/CalculateAmount.ts';

interface DataInput {
    bill: string;
    tip: string;
    people: string;
}

export default function App() {
    const INITIAL_DATA: DataInput = {
        bill: '',
        tip: '',
        people: '',
    };

    const [data, setData] = useState<DataInput>(INITIAL_DATA);
    const [error, setError] = useState<string | null>(null);
    const [selectedTipPercentage, setSelectedTipPercentage] = useState<
        number | null
    >(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'tip') {
            setSelectedTipPercentage(null);
        }

        if (name === 'people' && Number(value) === 0) {
            setError("Can't be zero");
        } else {
            setError(null);
        }

        setData((prev) => ({ ...prev, [name]: Number(value) }));
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setSelectedTipPercentage(Number(value));
        setData((prev) => ({ ...prev, [name]: Number(value) }));
    };

    const handleReset = () => {
        setData(INITIAL_DATA);
        setSelectedTipPercentage(null);
    };

    return (
        <article className="flex flex-col items-center lg:justify-center min-h-dvh">
            <img src={Logo} alt="Logo icon" className="pb-10 max-lg:pt-12" />
            <div className="bg-white p-8 flex flex-col w-full lg:max-w-[920px] lg:flex-row gap-8 lg:gap-12 max-lg:grow rounded-t-xl lg:rounded-xl">
                <section className="flex flex-col gap-4 basis-1/2">
                    <InputNumber
                        label="bill"
                        id="bill-input"
                        value={data.bill}
                        name="bill"
                        icon={DollarIcon}
                        placeholder="0"
                        onChange={handleInputChange}
                    />
                    <fieldset>
                        <legend className="text-grey-500">Select Tip %</legend>
                        <div className="grid grid-cols-3 max-md:grid-cols-2 items-center gap-4 mt-1.5">
                            <InputRadio
                                id="five-percent"
                                name="tip"
                                value={5}
                                onChange={handleRadioChange}
                                checked={selectedTipPercentage === 5}
                            />
                            <InputRadio
                                id="ten-percent"
                                name="tip"
                                value={10}
                                onChange={handleRadioChange}
                                checked={selectedTipPercentage === 10}
                            />
                            <InputRadio
                                id="fifteen-percent"
                                name="tip"
                                value={15}
                                onChange={handleRadioChange}
                                checked={selectedTipPercentage === 15}
                            />
                            <InputRadio
                                id="twenty-five-percent"
                                name="tip"
                                value={25}
                                onChange={handleRadioChange}
                                checked={selectedTipPercentage === 25}
                            />
                            <InputRadio
                                id="fifthy-percent"
                                name="tip"
                                value={50}
                                onChange={handleRadioChange}
                                checked={selectedTipPercentage === 50}
                            />
                            <InputNumber
                                id="custom-tip-input"
                                name="tip"
                                value={
                                    selectedTipPercentage === null
                                        ? data.tip || ''
                                        : ''
                                }
                                placeholder="custom"
                                onChange={handleInputChange}
                                position="center"
                            />
                        </div>
                    </fieldset>
                    <InputNumber
                        label="number of people"
                        id="people-input"
                        name="people"
                        icon={PeopleIcon}
                        value={data.people}
                        error={error}
                        placeholder="0"
                        onChange={handleInputChange}
                    />
                </section>
                <section className="bg-green-900 px-6 py-9 rounded-xl flex flex-col gap-4 basis-1/2">
                    <ResultDisplay
                        result={
                            CalculateAmount(
                                Number(data.bill),
                                Number(data.tip),
                                Number(data.people)
                            )?.tipAmount || 0
                        }
                        text="tip amount"
                    />
                    <ResultDisplay
                        result={
                            CalculateAmount(
                                Number(data.bill),
                                Number(data.tip),
                                Number(data.people)
                            )?.totalAmount || 0
                        }
                        text="total"
                    />
                    <button
                        className="w-full bg-green-400 rounded-md uppercase text-green-900 text-xl py-2.5 disabled:bg-green-400/30 lg:mt-auto cursor-pointer"
                        onClick={handleReset}
                        disabled={
                            data.bill === '' ||
                            data.tip === '' ||
                            data.people === '' ||
                            !!error
                        }>
                        Reset
                    </button>
                </section>
            </div>
        </article>
    );
}
