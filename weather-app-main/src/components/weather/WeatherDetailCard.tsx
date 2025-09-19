interface WeatherDetailCardProps {
    label: string;
    value?: string;
}

function WeatherDetailCard({ label, value = '-' }: WeatherDetailCardProps) {
    return (
        <div className="bg-neutral-800 p-5 rounded-xl border border-neutral-600 space-y-6">
            <p className="body-lg text-neutral-200">{label}</p>
            <h4 className="heading-3 text-neutral-0">{value}</h4>
        </div>
    );
}

export default WeatherDetailCard;
