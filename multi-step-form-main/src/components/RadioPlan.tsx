interface RadioPlanProps {
    image: string;
    name: string;
    price: number
    checked?: boolean;
    yearlySubs?: boolean;
}

function RadioPlan({image, name, price, checked, yearlySubs}: RadioPlanProps) {
    return (
        <label htmlFor={`${name.toLowerCase()}`}
               className='flex items-start gap-3.5 border border-purple-200 rounded-md p-4 has-checked:bg-blue-300/15 has-checked:outline-purple-600 has-checked:outline'>
            <input type='radio' id={`${name.toLowerCase()}`} value={name} checked={checked} className='hidden'/>
            <img src={image} alt={`${name} icon`}/>
            <div>
                <h3 className='text-blue-950 font-medium'>{name}</h3>
                <p className='text-grey-500 text-sm'>{`$${price}/${yearlySubs ? 'yr' : 'mo'}`}</p>
                {yearlySubs && <p className='text-blue-950 text-sm'>2 months free</p>}
            </div>
        </label>
    );
}

export default RadioPlan;