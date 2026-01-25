import { useCallback, useEffect, useRef, useState } from 'react';

export function useTimer(settings: Settings, onFinish: () => void) {
    const [timer, setTimer] = useState<number>(
        settings.mode === 'time' ? settings.timeLimit : 0,
    );
    const timerRef = useRef<number | null>(null);
    const startTime = useRef<number | null>(null);

    const totalPausedTimeRef = useRef<number>(0);
    const pauseStartTimeRef = useRef<number | null>(null);

    const startTimer = useCallback(() => {
        if (timerRef.current) return;

        if (startTime.current === null) {
            startTime.current = Date.now();
            totalPausedTimeRef.current = 0;
        } else if (pauseStartTimeRef.current !== null) {
            const pauseDuration = Date.now() - pauseStartTimeRef.current;
            totalPausedTimeRef.current += pauseDuration;
            pauseStartTimeRef.current = null;
        }

        timerRef.current = window.setInterval(() => {
            if (startTime.current === null) return;
            const effectiveElapsed =
                Date.now() - startTime.current - totalPausedTimeRef.current;
            const elapsedSeconds = Math.floor(effectiveElapsed / 1000);
            if (settings.mode === 'time') {
                const remainingTime = Math.max(
                    0,
                    settings.timeLimit - elapsedSeconds,
                );
                setTimer(remainingTime);
                if (remainingTime <= 0) {
                    onFinish();
                }
            } else {
                setTimer(elapsedSeconds);
            }
        }, 250);
    }, [settings.mode, settings.timeLimit, onFinish]);

    const stopTimer = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;

            pauseStartTimeRef.current = Date.now();
        }
    }, []);

    const resetTimer = useCallback(() => {
        stopTimer();
        setTimer(settings.mode === 'time' ? settings.timeLimit : 0);
        startTime.current = null;
    }, [settings.mode, settings.timeLimit, stopTimer]);

    useEffect(() => {
        return () => stopTimer();
    }, [stopTimer]);

    return {
        timer,
        startTimer,
        stopTimer,
        resetTimer,
    };
}
