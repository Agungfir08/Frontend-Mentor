interface ResultDisplayProps {
    text: string;
    result: string;
}

const ResultDisplay = ({ text, result }: ResultDisplayProps) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
                <p className="text-white capitalize">{text}</p>
                <p className="text-grey-400 text-xs">/ person</p>
            </div>
            <h2 className="text-[32px] text-green-400">${result}</h2>
        </div>
    );
};

export default ResultDisplay;
