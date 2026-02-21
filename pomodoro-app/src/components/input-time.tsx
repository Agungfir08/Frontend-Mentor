import ArrowUpIcon from '@/assets/icon-arrow-up.svg';
import ArrowDownIcon from '@/assets/icon-arrow-down.svg';
import { Button } from './ui/button';

interface InputTimeProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: keyof TIMER;
    onUP: () => void;
    onDown: () => void;
}
function InputTime({ label, id, onUP, onDown, ...props }: InputTimeProps) {
    return (
        <div className="grid not-md:grid-cols-2 not-md:items-center md:gap-2">
            <label htmlFor={id} className="font-bold text-xs text-blue-850/40">
                {label}
            </label>
            <div className="relative">
                <input
                    type="number"
                    id={id}
                    min={1}
                    max={60}
                    className="w-full pl-4 py-4 pr-7 text-[13px] font-bold bg-blue-50 rounded-md tracking-[5px] outline-none number-input"
                    {...props}
                />
                <div className="absolute top-1/2 right-1 transform -translate-y-1/2 flex flex-col justify-center gap-1.5">
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon-xs"
                        className="h-fit"
                        onClick={onUP}>
                        <img src={ArrowUpIcon} alt="arrow up icon" />
                    </Button>
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon-xs"
                        className="h-fit"
                        onClick={onDown}>
                        <img src={ArrowDownIcon} alt="arrow down icon" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default InputTime;
