export default function InfoItem({
    label,
    value,
}: {
    label: string;
    value: string | number;
}) {
    return (
        <p>
            <span className="font-semibold tracking-tight">{label}:</span>{' '}
            {value}
        </p>
    );
}
