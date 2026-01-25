import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const SETTINGS_INITIAL_STATE: Settings = {
    difficulty: 'easy',
    mode: 'passage',
    timeLimit: 15,
};

export const useTypingStore = create<TypingStore>()(
    persist(
        (set) => ({
            settings: SETTINGS_INITIAL_STATE,
            history: [],
            updateSettings: (newSetting) =>
                set((state) => ({
                    settings: { ...state.settings, ...newSetting },
                })),
            addGameResult: (result) =>
                set((state) => ({
                    history: [result, ...state.history],
                })),
        }),
        {
            name: 'typing-game',
            storage: createJSONStorage(() => localStorage),
        },
    ),
);
