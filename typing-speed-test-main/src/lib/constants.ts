export const MAX_WORDS = 100;

export const DIFFICULTIES = [
    {
        label: 'Easy',
        value: 'easy',
    },
    {
        label: 'Medium',
        value: 'medium',
    },
    {
        label: 'Hard',
        value: 'hard',
    },
] as const;

export const MODES = [
    {
        label: 'Time',
        value: 'time',
    },
    {
        label: 'Passage',
        value: 'passage',
    },
] as const;

export const TIME_MODE = [
    {
        label: '15s',
        value: '15',
    },
    {
        label: '30s',
        value: '30',
    },
    {
        label: '45s',
        value: '45',
    },
    {
        label: '60s',
        value: '60',
    },
] as const;
