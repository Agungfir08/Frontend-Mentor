interface MenuOption<T> {
    label: string;
    value: T;
}

type GameStateType = 'idle' | 'running' | 'finished';

type GameDifficulty = 'easy' | 'medium' | 'hard';

type GameMode = 'time' | 'passage';

interface GameResult {
    date: string;
    mode: GameMode;
    wpm: number;
    accuracy: number;
    timeLimit?: number;
}

interface TypingStore {
    settings: Settings;
    history: GameResult[];
    updateSettings: (newSettings: Partial<Settings>) => void;
    addGameResult: (result: GameResult) => void;
}

interface Settings {
    difficulty: GameDifficulty;
    mode: GameMode;
    timeLimit: number;
}

interface TypingAreaProps {
    text: string;
    isFocused: boolean;
    onBlur: () => void;
    onStart: () => void;
    onFinish: () => void;
    setCharCount: React.Dispatch<React.SetStateAction<number>>;
    setTypoCount: React.Dispatch<React.SetStateAction<number>>;
}
