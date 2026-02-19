import { create } from 'zustand';
import {
    createJSONStorage,
    persist,
    subscribeWithSelector,
} from 'zustand/middleware';

const usePomodoro = create<PomodoroStoreState>()(
    subscribeWithSelector(
        persist(
            (set) => ({
                timer: {
                    pomodoro: 0,
                    shortBreak: 0,
                    longBreak: 0,
                },
                font: 'kumbh-sans',
                color: 'red',
                handleTimerUp: (name) =>
                    set((state) => ({
                        timer: {
                            ...state.timer,
                            [name]: state.timer[name] + 1,
                        },
                    })),
                handleTimerDown: (name) =>
                    set((state) => ({
                        timer: {
                            ...state.timer,
                            [name]: Math.max(0, state.timer[name] - 1),
                        },
                    })),
                handleTimerChanges: (name, value) =>
                    set((state) => ({
                        timer: {
                            ...state.timer,
                            [name]: value,
                        },
                    })),
                selectColor: (color) => set({ color: color }),
                selectFont: (font) => set({ font: font }),
            }),
            {
                name: 'pomodoro-app',
                storage: createJSONStorage(() => localStorage),
                onRehydrateStorage: () => (state) => {
                    document.body.classList.remove(
                        'font-kumbh-sans',
                        'font-roboto-slab',
                        'font-space-mono',
                    );
                    if (state?.font === 'kumbh-sans')
                        document.body.classList.add('font-kumbh-sans');
                    if (state?.font === 'roboto-slab')
                        document.body.classList.add('font-roboto-slab');
                    if (state?.font === 'space-mono')
                        document.body.classList.add('font-space-mono');
                },
                partialize: (state) => ({
                    timer: state.timer,
                    font: state.font,
                    color: state.color,
                }),
            },
        ),
    ),
);

usePomodoro.subscribe(
    (state) => state.font,
    (font) => {
        document.body.classList.remove(
            'font-kumbh-sans',
            'font-roboto-slab',
            'font-space-mono',
        );
        if (font === 'kumbh-sans')
            document.body.classList.add('font-kumbh-sans');
        if (font === 'roboto-slab')
            document.body.classList.add('font-roboto-slab');
        if (font === 'space-mono')
            document.body.classList.add('font-space-mono');
    },
);

export default usePomodoro;
