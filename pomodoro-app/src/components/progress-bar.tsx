import { cn } from '@/lib/utils';

interface ProgressBarProps {
    size: number;
    progress: number;
    className?: string;
}

function ProgressBar({ size, progress, className }: ProgressBarProps) {
    const center = size / 2;
    const radius = center - 10;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * ((100 - progress) / 100);
    return (
        <div className="absolute">
            <svg width={size} height={size} className={`rounded-full`}>
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    fill="none"
                    className={cn(
                        '-rotate-90 origin-[50%_50%] transition-all',
                        className,
                    )}
                />
            </svg>
        </div>
    );
}

export default ProgressBar;
