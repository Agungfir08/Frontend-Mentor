interface ResultComponentProps {
    title: string;
    value: string;
}

function ResultComponent({ title, value }: ResultComponentProps) {
    return (
        <div className="space-y-1.5 lg:space-y-3">
            <h2 className="text-gray-400 font-semibold text-[10px] lg:text-[13px] tracking-[0.16rem] lg:tracking-[0.10rem] uppercase max-md:text-center">
                {title}
            </h2>
            <p className="text-gray-950 font-semibold text-xl lg:text-[26px] -tracking-tight max-md:text-center">
                {value}
            </p>
        </div>
    );
}

export default ResultComponent;
