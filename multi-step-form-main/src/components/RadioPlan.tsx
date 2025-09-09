import {useFormContext} from "react-hook-form";

interface RadioPlanProps {
    image: string;
    name: string;
    price: number
    yearlySubscription?: boolean;
}

function RadioPlan({image, name, price, yearlySubscription}: RadioPlanProps) {
    const {register} = useFormContext()
    return (
        <label htmlFor={`${name.toLowerCase()}`}
               className='flex items-start gap-3.5 border border-purple-200 rounded-md p-4 has-checked:bg-blue-300/15 has-checked:outline-purple-600 has-checked:outline'>
            <input type='radio' id={`${name.toLowerCase()}`} value={name} {...register('plan')}
                   className='sr-only hidden'/>
            <img src={image} alt={`${name} icon`}/>
            <div>
                <h3 className='text-blue-950 font-medium'>{name}</h3>
                <p className='text-grey-500 text-sm'>{`$${price}/${yearlySubscription ? 'yr' : 'mo'}`}</p>
                {yearlySubscription && <p className='text-blue-950 text-sm'>2 months free</p>}
            </div>
        </label>
    );
}

export default RadioPlan;