import { useCallback, useEffect, useRef, useState } from 'react';

export function useTimer(timer: TIMER, tab: ActiveTabsType) {
    const initialSeconds = timer[tab] * 60;
    const [time, setTime] = useState(initialSeconds);
    const [timerState, setTimerState] = useState<TimerState>('idle');

    const intervalRef = useRef<number | null>(null);
    const stateRef = useRef({
        startedAt: null as number | null,
        pausedAt: null as number | null,
        totalPaused: 0,
        initial: initialSeconds,
    });

    const clearTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const getRemaining = () => {
        const s = stateRef.current;
        if (s.startedAt === null) return s.initial;
        const elapsed = Date.now() - s.startedAt - s.totalPaused;
        return Math.max(0, s.initial - Math.floor(elapsed / 1000));
    };

    useEffect(() => {
        clearTimer();
        stateRef.current = {
            startedAt: null,
            pausedAt: null,
            totalPaused: 0,
            initial: initialSeconds,
        };
        setTime(initialSeconds);
        setTimerState('idle');
    }, [tab]);

    useEffect(() => clearTimer, []);

    const startTimer = useCallback(() => {
        const s = stateRef.current;

        if (s.startedAt === null) {
            s.startedAt = Date.now();
        } else if (s.pausedAt !== null) {
            s.totalPaused += Date.now() - s.pausedAt;
            s.pausedAt = null;
        } else {
            return;
        }

        setTimerState('running');
        intervalRef.current = window.setInterval(() => {
            const remaining = getRemaining();
            setTime(remaining);
            if (remaining === 0) {
                clearTimer();
                setTimerState('finished');
            }
        }, 250);
    }, []);

    const pauseTimer = useCallback(() => {
        if (intervalRef.current === null) return;
        clearTimer();
        stateRef.current.pausedAt = Date.now();
        setTimerState('paused');
    }, []);

    const resetTimer = useCallback(() => {
        clearTimer();
        stateRef.current = {
            startedAt: null,
            pausedAt: null,
            totalPaused: 0,
            initial: stateRef.current.initial,
        };
        setTime(stateRef.current.initial);
        setTimerState('idle');
    }, []);

    return { time, timerState, startTimer, pauseTimer, resetTimer };
}
