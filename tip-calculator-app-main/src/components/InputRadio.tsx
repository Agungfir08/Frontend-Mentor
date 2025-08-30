interface InputRadioProps {
    id: string,
    name: string,
    value: number,
    checked?: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const InputRadio = ({id, name, value, checked, onChange}: InputRadioProps) => {
    return (
        <label htmlFor={id}
               className='bg-green-900 text-white text-center text-2xl py-1.5 rounded-md has-checked:text-green-900 has-checked:bg-green-400 hover:text-green-900 hover:bg-green-400 cursor-pointer'>
            <input type="radio" id={id} name={name} value={value} onChange={onChange} checked={checked}
                   className='appearance-none sr-only'/>{`${value}%`}
        </label>
    );
};

export default InputRadio;