import Header from './components/Header.tsx';
import StatsMenu from '@/components/stats-menu.tsx';
import TypingArea from '@/components/typing-area.tsx';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { generateGameText } from '@/lib/utils.ts';
import { useTypingStore } from '@/store/store.ts';
import { Button } from './components/UI/button.tsx';
import RestartIcon from '@/assets/images/icon-restart.svg';
import { useTimer } from './assets/hooks/useTimer.ts';
import Overlay from './components/overlay.tsx';
import Result from './components/result.tsx';

function App() {
    const settings = useTypingStore((s) => s.settings);
    const addGameResult = useTypingStore((s) => s.addGameResult);
    const [text, setText] = useState(() =>
        generateGameText(settings.mode, settings.difficulty),
    );
    const [focused, setFocused] = useState(true);

    const [gameState, setGameState] = useState<GameStateType>('idle');

    const [charCount, setCharCount] = useState(0);
    const [typoCount, setTypoCount] = useState(0);

    const finishRef = useRef(false);

    const finishGame = useCallback(() => {
        setGameState('finished');
        setFocused(false);
    }, []);

    const { timer, startTimer, stopTimer, resetTimer } = useTimer(
        settings,
        finishGame,
    );

    const stats = useMemo(() => {
        const correctChars = Math.max(0, charCount - typoCount);
        const duration =
            settings.mode === 'time'
                ? Math.max(0.1, settings.timeLimit - timer)
                : Math.max(0.1, timer);

        const minutes = duration / 60;
        const wpm = Math.round(correctChars / 5 / minutes);
        const accuracy =
            charCount > 0 ? Math.round((correctChars / charCount) * 100) : 0;

        return { wpm, accuracy, duration };
    }, [charCount, typoCount, timer, settings.mode, settings.timeLimit]);

    const handleStart = useCallback(() => {
        setGameState((prev) => (prev === 'idle' ? 'running' : prev));
    }, []);

    const handleBlur = useCallback(() => {
        setFocused(false);
    }, []);

    const handleRestart = () => {
        setGameState('idle');
        setFocused(true);
        setText(generateGameText(settings.mode, settings.difficulty));
        finishRef.current = false;
        resetTimer();
        setCharCount(0);
        setTypoCount(0);
    };

    useEffect(() => {
        if (gameState === 'finished' && !finishRef.current) {
            addGameResult({
                date: new Date().toISOString(),
                mode: settings.mode,
                wpm: stats.wpm,
                accuracy: stats.accuracy,
                timeLimit:
                    settings.mode === 'time'
                        ? settings.timeLimit
                        : stats.duration,
            });
            finishRef.current = true;
        }
    }, [gameState, stats, settings, addGameResult]);

    useEffect(() => {
        setGameState('idle');
        resetTimer();
    }, [settings.mode, settings.timeLimit, settings.difficulty, resetTimer]);

    useEffect(() => {
        setText(generateGameText(settings.mode, settings.difficulty));
    }, [settings.difficulty, settings.mode]);

    useEffect(() => {
        if (gameState === 'running') {
            if (focused) startTimer();
            else stopTimer();
        } else if (gameState === 'finished' || gameState === 'idle') {
            stopTimer();
        }
    }, [gameState, startTimer, stopTimer, focused]);

    return (
        <>
            <Header />

            {/*--Main Content--*/}
            <main className={'mt-8 md:mt-10 lg:mt-16 space-y-8'}>
                {/*--Stats Menu--*/}
                {gameState === 'finished' ? (
                    <Result
                        wpm={stats.wpm}
                        accuracy={stats.accuracy}
                        charCorrect={charCount}
                        typo={typoCount}
                        onClick={handleRestart}
                    />
                ) : (
                    <>
                        <StatsMenu
                            wpm={stats.wpm}
                            accuracy={stats.accuracy}
                            timer={timer}
                        />
                        <div className="relative">
                            <Overlay
                                focused={focused}
                                setFocused={setFocused}
                            />
                            <TypingArea
                                text={text}
                                isFocused={focused}
                                onBlur={handleBlur}
                                onStart={handleStart}
                                onFinish={finishGame}
                                setCharCount={setCharCount}
                                setTypoCount={setTypoCount}
                            />
                        </div>
                        <div className="flex justify-center border-t border-neutral-700 pt-6 lg:pt-8">
                            <Button
                                variant={'outline'}
                                className="text-neutral-0"
                                onClick={handleRestart}>
                                Restart Test
                                <img src={RestartIcon} alt="restart icon" />
                            </Button>
                        </div>
                    </>
                )}
            </main>
        </>
    );
}

export default App;
