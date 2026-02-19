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
import usePomodoro from '@/store/pomodoro-store';

const INPUT_CONFIGS: INPUT_TIME[] = [
    { label: 'Pomodoro', id: 'pomodoro' },
    { label: 'Short Break', id: 'shortBreak' },
    { label: 'Long Break', id: 'longBreak' },
];

const FONT_RADIOS_CONGIGS: FONT_TYPE[] = [
    { id: 'kumbh-sans', className: 'font-kumbh-sans font-bold' },
    { id: 'roboto-slab', className: 'font-roboto-slab' },
    { id: 'space-mono', className: 'font-space-mono font-bold' },
];

function SettingDialog() {
    const currentFont = usePomodoro((s) => s.font);
    const changeFont = usePomodoro((s) => s.selectFont);

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <img src={SettingIcon} alt="setting icon" />
                    </Button>
                </DialogTrigger>
                <DialogContent className="min-w-82.25 max-w-135">
                    <DialogHeader>Settings</DialogHeader>
                    <HorizontalLine />
                    <div className="px-6 md:px-9 space-y-6">
                        <div className="space-y-4">
                            <h2 className="uppercase not-md:text-center font-bold text-[11px] md:text-[13px] tracking-[4.23px]">
                                Time (Minutes)
                            </h2>
                            <div className="grid md:grid-cols-3 gap-2 md:gap-6">
                                {INPUT_CONFIGS.map(({ label, id }) => (
                                    <InputTime key={id} label={label} id={id} />
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
                                            value={id}
                                            className={className}
                                            variant="font"
                                            checked={currentFont === id}
                                            onChange={() => changeFont(id)}
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
                            <div className="flex items-center gap-4"></div>
                        </div>
                    </div>
                </DialogContent>
            </form>
        </Dialog>
    );
}

export default SettingDialog;
