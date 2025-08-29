const InputRadio = ({id, name, value}: { id: string, name: string, value: number }) => {
    return (
        <label htmlFor={id}
               className='bg-green-900 text-white text-center text-2xl py-1.5 rounded-md has-checked:text-green-900 has-checked:bg-green-400 hover:text-green-900 hover:bg-green-400 cursor-pointer'>
            <input type="radio" id={id} name={name} value={value} className='appearance-none'/>{`${value}%`}
        </label>
    );
};

export default InputRadio;