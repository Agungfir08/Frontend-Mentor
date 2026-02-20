type FONT_OPTIONS = 'kumbh-sans' | 'roboto-slab' | 'space-mono';

type COLOR_OPTIONS = 'red' | 'cyan' | 'purple';

type TIMER = {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
};

type TimerState = 'idle' | 'running' | 'paused' | 'finished';

type ActiveTabsType = keyof TIMER;

type TABS_TYPE = {
    label: string;
    value: ActiveTabsType;
};

type PomodoroStoreState = {
    activeTab: ActiveTabsType;
    timer: TIMER;
    font: FONT_OPTIONS;
    color: COLOR_OPTIONS;
    setActiveTab: (tab: ActiveTabsType) => void;
    setTimer: (timer: TIMER) => void;
    setColor: (color: COLOR_OPTIONS) => void;
    setFont: (font: FONT_OPTIONS) => void;
};

interface INPUT_TIME {
    label: string;
    id: keyof TIMER;
}

interface FONT_TYPE {
    id: FONT_OPTIONS;
    className: string;
}

interface COLOR_TYPE {
    id: COLOR_OPTIONS;
    className: string;
}
