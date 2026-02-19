import ArrowUpIcon from '@/assets/icon-arrow-up.svg';
import ArrowDownIcon from '@/assets/icon-arrow-down.svg';
import { Button } from './ui/button';
import usePomodoro from '@/store/pomodoro-store';

interface InputTimeProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: keyof TIMER;
}
function InputTime({ label, id, ...props }: InputTimeProps) {
    const timer = usePomodoro((s) => s.timer);
    const handleTimerChanges = usePomodoro((s) => s.handleTimerChanges);
    const handleUpButton = usePomodoro((s) => s.handleTimerUp);
    const handleDownButton = usePomodoro((s) => s.handleTimerDown);

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(0, Number(e.target.value) || 0);
        handleTimerChanges(id, value);
    };

    return (
        <div className="grid not-md:grid-cols-2 not-md:items-center md:gap-2">
            <label htmlFor={id} className="font-bold text-xs text-blue-850/40">
                {label}
            </label>
            <div className="relative">
                <input
                    type="number"
                    id={id}
                    name={id}
                    value={timer[id]}
                    min={0}
                    className="w-full pl-4 py-4 pr-7 text-[13px] font-bold bg-blue-50 rounded-md tracking-[5px] outline-none number-input"
                    onChange={handleChanges}
                    {...props}
                />
                <div className="absolute top-1/2 right-1 transform -translate-y-1/2 flex flex-col justify-center gap-1.5">
                    <Button
                        variant="ghost"
                        size="icon-xs"
                        className="h-fit"
                        onClick={() => handleUpButton(id)}>
                        <img src={ArrowUpIcon} alt="arrow up icon" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon-xs"
                        className="h-fit"
                        onClick={() => handleDownButton(id)}>
                        <img src={ArrowDownIcon} alt="arrow down icon" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default InputTime;
