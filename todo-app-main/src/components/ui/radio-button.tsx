interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

function RadioButton({ label, className, ...props }: RadioButtonProps) {
    return (
        <label className="text-sm font-bold tracking-tight leading-none text-gray-600 has-checked:text-blue-500 cursor-pointer">
            <input {...props} type="radio" className="appearance-none" />
            <span className="capitalize ">{label}</span>
        </label>
    );
}

export default RadioButton;
