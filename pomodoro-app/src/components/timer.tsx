import { useTimer } from '@/hooks/useTimer';
import usePomodoro from '@/store/pomodoro-store';
import ProgressBar from './progress-bar';
import { useIsMobile } from '@/hooks/use-mobile';
import TimerDisplay from './timer-display';
import AlarmSound from '@/assets/alarm-sound.wav';
import { useEffect } from 'react';
import useSound from '@/hooks/useSound';

const LABEL_TIMER_STATE: Record<TimerState, string> = {
    idle: 'start',
    running: 'pause',
    paused: 'resume',
    finished: 'stop',
};

const PROGRESS_COLOR: Record<COLOR_OPTIONS, string> = {
    red: 'text-red-400',
    cyan: 'text-cyan-300',
    purple: 'text-purple-400',
};

function Timer() {
    const { timer, activeTab, color } = usePomodoro();
    const timerInSecond = timer[activeTab] * 60;
    const { time, startTimer, timerState, pauseTimer, resetTimer } =
        useTimer(timerInSecond);

    const isMobile = useIsMobile();
    const { play, stop } = useSound(AlarmSound);

    useEffect(() => {
        if (timerState === 'finished') play();
        else stop();
    }, [timerState]);

    return (
        <div className="size-75 md:size-102.5 rounded-full bg-linear-to-br to-[#2e325a] from-[#0e112a] flex justify-center items-center shadow-[-50px_-50px_100px_0px_rgb(39,44,80,1),50px_50px_100px_0px_rgb(18,21,48,1)]">
            <div
                className="size-67 md:size-91.25 rounded-full bg-blue-900 flex items-center justify-center cursor-pointer"
                onClick={
                    timerState === 'idle' || timerState === 'paused'
                        ? startTimer
                        : timerState === 'finished'
                          ? resetTimer
                          : pauseTimer
                }>
                <ProgressBar
                    size={isMobile ? 260 : 340}
                    className={PROGRESS_COLOR[color]}
                    progress={(time / timerInSecond) * 100}
                />
                <TimerDisplay
                    time={time}
                    label={LABEL_TIMER_STATE[timerState]}
                />
            </div>
        </div>
    );
}

export default Timer;
