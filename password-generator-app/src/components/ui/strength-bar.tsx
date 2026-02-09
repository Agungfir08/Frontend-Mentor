import clsx from 'clsx';

interface StrengthBarProp {
    active: boolean;
    color: string;
}

function StrengthBar({ active, color }: StrengthBarProp) {
    return (
        <div
            className={clsx(
                'h-7 w-2.5 border-2 ',
                active ? color : 'bg-transparent border-white',
                {
                    'border-none': active,
                },
            )}></div>
    );
}

export default StrengthBar;
