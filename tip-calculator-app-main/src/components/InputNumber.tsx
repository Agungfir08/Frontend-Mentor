import clsx from 'clsx';

type position = 'right' | 'center'

interface InputNumberProps {
    icon?: string,
    label?: string,
    id: string,
    position?: position,
    placeholder: string
}

const InputNumber = ({icon, label, id, placeholder, position}: InputNumberProps) => {
    return (
        <>
            {label &&
                <label htmlFor={id} className='capitalize text-grey-500 cursor-pointer'>{label}</label>
            }
            <div className={clsx('relative w-full', {
                'mt-1.5': label
            })}>
                {icon &&
                    <img src={icon} alt={`${icon} icon`}
                         className='absolute top-1/2 left-4 transform -translate-y-1/2'/>
                }
                <input type="number" id={id} placeholder={placeholder} min='0'
                       className={clsx('bg-grey-50 appearance-none no-spinner w-full text-2xl font-bold text-green-900 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer placeholder:capitalize hover:ring-2 hover:ring-green-400', {
                           'pr-4 pl-10': icon,
                           'px-4': !icon,
                           'text-center': position === 'center',
                           'text-right': position === 'right'
                       })}/>
            </div>
        </>
    );
};

export default InputNumber;