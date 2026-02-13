interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputProps) {
    return (
        <div className="relative shadow-md">
            <div className="absolute size-5 md:size-6 rounded-full border border-purple-300 top-1/2 left-6 transform -translate-y-1/2"></div>
            <input
                type="text"
                placeholder="Create a new todo..."
                className="w-full bg-white dark:bg-navy-900 rounded-sm text-xs md:text-lg text-purple-800 dark:text-purple-100 tracking-tight placeholder:text-gray-600 pl-14 md:pl-16 pr-6 py-4.5 md:py-5.75 leading-none"
                {...props}
            />
        </div>
    );
}

export default Input;
