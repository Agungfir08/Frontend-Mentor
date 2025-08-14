export default function IconBox({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    return (
        <div className={` font-bold text-lg w-fit px-4 py-3 ${className}`}>
            <span>{text}</span>
        </div>
    );
}
