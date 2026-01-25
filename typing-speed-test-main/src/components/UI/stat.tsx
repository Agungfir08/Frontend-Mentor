import { cn, formatTimer } from '@/lib/utils.ts';

interface StatProps {
    type: 'wpm' | 'accuracy' | 'timer';
    value: number;
}

function Stat({ type, value }: StatProps) {
    let title: string;
    let realTimeStat: number | string;

    if (type === 'wpm') {
        title = 'WPM';
        realTimeStat = Math.floor(value);
    } else if (type === 'accuracy') {
        title = 'Accuracy';
        realTimeStat = `${Math.floor(value)}%`;
    } else {
        title = 'Time';
        realTimeStat = formatTimer(value);
    }

    return (
        <div className={'flex not-md:flex-col items-center gap-1.5'}>
            <h3 className={'text-preset-three-regular text-neutral-400'}>
                {title}:
            </h3>
            <p
                className={cn('text-preset-two text-neutral-0', {
                    'text-yellow-400': type === 'timer',
                    'text-red-500': type === 'accuracy',
                })}>
                {realTimeStat}
            </p>
        </div>
    );
}

export default Stat;
