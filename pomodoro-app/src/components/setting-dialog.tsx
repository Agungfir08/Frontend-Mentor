import { Button } from './ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from './ui/dialog';
import SettingIcon from '../assets/icon-settings.svg';
import InputTime from './input-time';
import HorizontalLine from './ui/horizontal-line';
import RadioButton from './ui/radio-button';
import { useState } from 'react';
import usePomodoro from '@/store/pomodoro-store';
import {
    COLOR_RADIOS_CONFIGS,
    FONT_RADIOS_CONGIGS,
    INPUT_CONFIGS,
} from '@/lib/constant';
import { cn } from '@/lib/utils';

function SettingDialog() {
    const { timer, color, font, setTimer, setColor, setFont } = usePomodoro();
    const [time, setTime] = useState<TIMER>(timer);
    const [selectedFont, setSelectedFont] = useState<FONT_OPTIONS>(font);
    const [selectedColor, setSelectedColor] = useState<COLOR_OPTIONS>(color);
    const [open, setOpen] = useState<boolean>(false);

    const handleChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setTime((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleUpButton = (name: keyof TIMER) => {
        setTime((prev) => ({ ...prev, [name]: time[name] + 1 }));
    };

    const handleDownButton = (name: keyof TIMER) => {
        setTime((prev) => ({ ...prev, [name]: Math.max(0, time[name] - 1) }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!time.pomodoro || !time.shortBreak || !time.longBreak) {
            return;
        }

        setTimer(time);
        setColor(selectedColor);
        setFont(selectedFont);

        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                    <img src={SettingIcon} alt="setting icon" />
                </Button>
            </DialogTrigger>
            <DialogContent className="min-w-82.25 max-w-135">
                <form onSubmit={handleSubmit}>
                    <div className="pt-4.5 pb-6 md:pt-8 md:pb-12 space-y-4 relative">
                        <DialogHeader>Settings</DialogHeader>
                        <HorizontalLine />
                        <div className="px-6 md:px-9 space-y-6">
                            <div className="space-y-4">
                                <h2 className="uppercase not-md:text-center font-bold text-[11px] md:text-[13px] tracking-[4.23px]">
                                    Time (Minutes)
                                </h2>
                                <div className="grid md:grid-cols-3 gap-2 md:gap-6">
                                    {INPUT_CONFIGS.map(({ label, id }) => (
                                        <InputTime
                                            key={id}
                                            label={label}
                                            id={id}
                                            name={id}
                                            value={time[id]}
                                            onChange={handleChangeTime}
                                            onUP={() => handleUpButton(id)}
                                            onDown={() => handleDownButton(id)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <HorizontalLine />
                            <div className="flex not-md:flex-col not-md:gap-4 items-center md:justify-between">
                                <h2 className="uppercase font-bold text-[11px] md:text-[13px] tracking-[4.23px]">
                                    font
                                </h2>
                                <div className="flex items-center gap-4">
                                    {FONT_RADIOS_CONGIGS.map(
                                        ({ id, className }) => (
                                            <RadioButton
                                                key={id}
                                                label="Aa"
                                                name="font"
                                                className={className}
                                                variant="font"
                                                checked={selectedFont === id}
                                                onChange={() =>
                                                    setSelectedFont(id)
                                                }
                                            />
                                        ),
                                    )}
                                </div>
                            </div>
                            <HorizontalLine />
                            <div className="flex not-md:flex-col not-md:gap-4 items-center md:justify-between">
                                <h2 className="uppercase font-bold text-[11px] md:text-[13px] tracking-[4.23px]">
                                    color
                                </h2>
                                <div className="flex items-center gap-4">
                                    {COLOR_RADIOS_CONFIGS.map(
                                        ({ id, className }) => (
                                            <RadioButton
                                                key={id}
                                                name="color"
                                                className={className}
                                                variant="color"
                                                checked={selectedColor === id}
                                                onChange={() =>
                                                    setSelectedColor(id)
                                                }
                                            />
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>
                        <Button
                            type="submit"
                            className={cn(
                                'absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-35 h-13.25 rounded-full capitalize text-base font-bold',
                                {
                                    'bg-red-400': color === 'red',
                                    'bg-cyan-300': color === 'cyan',
                                    'bg-purple-400': color === 'purple',
                                },
                            )}>
                            apply
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default SettingDialog;
