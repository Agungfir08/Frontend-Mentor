import Logo from './assets/logo.svg';
import DollarIcon from './assets/icon-dollar.svg'
import PeopleIcon from './assets/icon-person.svg'
import InputNumber from "./components/InputNumber.tsx";
import InputRadio from "./components/InputRadio.tsx";

export default function App() {
    return (
        <article className='flex flex-col items-center justify-center min-h-dvh'>
            <img src={Logo} alt="Logo icon"/>
            <div className='bg-white p-8 rounded-xl max-md:w-full space-y-4'>

                <InputNumber label='bill' id='bill-input' icon={DollarIcon} placeholder='0' position='right'/>
                <fieldset>
                    <legend className='text-grey-500'>Select Tip %</legend>
                    <div className='grid grid-cols-3 max-md:grid-cols-2 items-center gap-4 mt-1.5'>
                        <InputRadio id='five-percent' name='tip' value={5}/>
                        <InputRadio id='ten-percent' name='tip' value={10}/>
                        <InputRadio id='fifteen-percent' name='tip' value={15}/>
                        <InputRadio id='twenty-five-percent' name='tip' value={25}/>
                        <InputRadio id='fifthy-percent' name='tip' value={50}/>
                        <InputNumber id='custom-tip-input' placeholder='custom' position='center'/>
                    </div>
                </fieldset>
                <InputNumber label='number of people' id='people-input' icon={PeopleIcon} placeholder='0'
                             position='right'/>

            </div>
        </article>
    );
}
