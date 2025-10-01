interface ResultComponentProps {
    title: string;
    value: string;
}

function ResultComponent({ title, value }: ResultComponentProps) {
    return (
        <div className="space-y-3">
            <h2 className="text-gray-400 font-semibold text-[13px] tracking-[0.10rem] uppercase">
                {title}
            </h2>
            <p className="text-gray-950 font-semibold text-[26px] -tracking-tight">
                {value}
            </p>
        </div>
    );
}

export default ResultComponent;
