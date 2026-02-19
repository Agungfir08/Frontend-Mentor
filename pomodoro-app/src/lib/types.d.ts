type FONT_OPTIONS = 'kumbh-sans' | 'roboto-slab' | 'space-mono';

type COLOR_OPTIONS = 'red' | 'cyan' | 'purple';

type TIMER = {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
};

type PomodoroStoreState = {
    timer: TIMER;
    font: FONT_OPTIONS;
    color: COLOR_OPTIONS;
    handleTimerUp: (name: keyof TIMER) => void;
    handleTimerDown: (name: keyof TIMER) => void;
    handleTimerChanges: (name: keyof TIMER, value: number) => void;
    selectColor: (color: COLOR_OPTIONS) => void;
    selectFont: (font: FONT_OPTIONS) => void;
};

interface INPUT_TIME {
    label: string;
    id: keyof TIMER;
}

interface FONT_TYPE {
    id: FONT_OPTIONS;
    className: string;
}
