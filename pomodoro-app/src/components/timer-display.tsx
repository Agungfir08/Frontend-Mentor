import { formatTimer } from '@/lib/utils';

interface TimerDisplayProps {
    time: number;
    label: string;
}

function TimerDisplay({ time, label }: TimerDisplayProps) {
    return (
        <div className="relative">
            <h2 className="text-[80px] md:text-[100px] text-white -tracking-[7px] md:-tracking-[4px] ">
                {formatTimer(time)}
            </h2>
            <span className="absolute text-base font-bold tracking-[15px] text-white uppercase left-1/2 -bottom-5 transform -translate-x-1/2">
                {label}
            </span>
        </div>
    );
}

export default TimerDisplay;
