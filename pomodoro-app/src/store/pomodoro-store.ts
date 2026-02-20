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
                activeTab: 'pomodoro',
                timer: {
                    pomodoro: 0,
                    shortBreak: 0,
                    longBreak: 0,
                },
                font: 'kumbh-sans',
                color: 'red',
                setActiveTab: (tab) => set({ activeTab: tab }),
                setTimer: (timer) => set({ timer: timer }),
                setColor: (color) => set({ color: color }),
                setFont: (font) => set({ font: font }),
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
