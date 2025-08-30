import Logo from './assets/logo.svg';
import DollarIcon from './assets/icon-dollar.svg'
import PeopleIcon from './assets/icon-person.svg'
import InputNumber from "./components/InputNumber.tsx";
import InputRadio from "./components/InputRadio.tsx";
import {useState} from "react";
import ResultDisplay from "./components/ResultDisplay.tsx";

interface DataInput {
    bill: number | undefined,
    tip: number | undefined,
    people: number | undefined,
}

export default function App() {
    const INITIAL_DATA: DataInput = {
        bill: undefined,
        tip: undefined,
        people: undefined,
    }

    const [data, setData] = useState<DataInput>(INITIAL_DATA)
    const [selectedTipPercentage, setSelectedTipPercentage] = useState<number | null>(null)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        if (name === 'tip') {
            setSelectedTipPercentage(null)
        }
        setData((prev) => ({...prev, [name]: Number(value)}))
    }

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        setSelectedTipPercentage(Number(value))
        setData((prev) => ({...prev, [name]: Number(value)}))
    }

    console.log(data)

    return (
        <article className='flex flex-col items-center justify-center min-h-dvh'>
            <img src={Logo} alt="Logo icon"/>
            <div className='bg-white p-8 max-md:w-full rounded-t-xl lg:rounded-xl space-y-8'>
                <section className='space-y-4'>
                    <InputNumber label='bill' id='bill-input' value={data.bill} name='bill' icon={DollarIcon}
                                 placeholder='0' onChange={handleInputChange}
                                 position='right'/>
                    <fieldset>
                        <legend className='text-grey-500'>Select Tip %</legend>
                        <div className='grid grid-cols-3 max-md:grid-cols-2 items-center gap-4 mt-1.5'>
                            <InputRadio id='five-percent' name='tip' value={5} onChange={handleRadioChange}
                                        checked={selectedTipPercentage === 5}/>
                            <InputRadio id='ten-percent' name='tip' value={10} onChange={handleRadioChange}
                                        checked={selectedTipPercentage === 10}/>
                            <InputRadio id='fifteen-percent' name='tip' value={15} onChange={handleRadioChange}
                                        checked={selectedTipPercentage === 15}/>
                            <InputRadio id='twenty-five-percent' name='tip' value={25} onChange={handleRadioChange}
                                        checked={selectedTipPercentage === 25}/>
                            <InputRadio id='fifthy-percent' name='tip' value={50} onChange={handleRadioChange}
                                        checked={selectedTipPercentage === 50}/>
                            <InputNumber id='custom-tip-input' name='tip'
                                         value={selectedTipPercentage === null ? (data.tip || undefined) : undefined}
                                         placeholder='custom'
                                         onChange={handleInputChange} position='center'/>
                        </div>
                    </fieldset>
                    <InputNumber label='number of people' id='people-input' name='people' icon={PeopleIcon}
                                 value={data.people}
                                 placeholder='0' onChange={handleInputChange}
                                 position='right'/>
                </section>
                <section className='bg-green-900 px-6 py-9 rounded-xl space-y-6'>
                    <ResultDisplay result={4.27} text='tip amount'/>
                    <ResultDisplay result={10.27} text='total'/>
                    <button className='w-full bg-green-400 rounded-md uppercase text-green-900 text-xl py-2.5'>Reset
                    </button>
                </section>
            </div>
        </article>
    );
}
