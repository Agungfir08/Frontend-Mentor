import CompletedIcon from '@/assets/images/icon-completed.svg';
import NewPersonalBestIcon from '@/assets/images/icon-new-pb.svg';
import RestartIcon from '@/assets/images/icon-restart.svg';
import StatComplete from './UI/stat-complete';
import { Button } from './UI/button';
import { useTypingStore } from '@/store/store';
import { cn } from '@/lib/utils';
import { useMemo } from 'react';

interface ResultProps {
    wpm: number;
    accuracy: number;
    charCorrect: number;
    typo: number;
    onClick: () => void;
}

const RESULT_CONTENT = {
    newBest: {
        title: 'High Score Smashed!',
        description: "You're getting faster. That was incredible typing.",
        buttonText: 'beat this score',
        icon: NewPersonalBestIcon,
        iconAlt: 'New Personal Best Icon',
    },
    completed: {
        title: 'Test Complete!',
        description: 'Solin run. Keep pushing to beat your high score.',
        buttonText: 'go again',
        icon: CompletedIcon,
        iconAlt: 'Completed Icon',
    },
};

function Result({ wpm, accuracy, charCorrect, typo, onClick }: ResultProps) {
    const history = useTypingStore((s) => s.history);
    const { isNewBest, content } = useMemo(() => {
        const currentMax =
            history.length > 0
                ? Math.max(...history.map((data) => data.wpm))
                : 0;

        const isHighest = wpm === currentMax;

        const isUnique =
            history.filter((h) => h.wpm === currentMax).length === 1;

        const isNewBest = isHighest && isUnique;

        return {
            isNewBest,
            content: isNewBest
                ? RESULT_CONTENT.newBest
                : RESULT_CONTENT.completed,
        };
    }, [history, wpm]);

    return (
        <div className="flex flex-col items-center pt-6 gap-8">
            <div
                className={cn('relative', {
                    'before:absolute before:-z-10 before:size-22 before:bg-green-500/25 before:left-1/2 before:transform before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2 before:rounded-full after:absolute after:-z-20 after:size-28 after:bg-green-500/15 after:left-1/2 after:transform after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:rounded-full':
                        !isNewBest,
                })}>
                <img
                    src={content.icon}
                    alt={content.iconAlt}
                    className="size-16"
                />
            </div>
            <div className="flex flex-col items-center gap-2.5">
                <h1 className="text-preset-one-bold text-neutral-0">
                    {content.title}
                </h1>
                <p className="text-neutral-400 text-preset-three-regular">
                    {content.description}
                </p>
            </div>
            <div className="grid grid-cols-3 gap-5">
                <StatComplete text="WPM" value={wpm} variant="white" />
                <StatComplete
                    text="Accuracy"
                    value={`${accuracy}%`}
                    variant={accuracy < 100 ? 'red' : 'green'}
                />
                <StatComplete
                    text="Characters"
                    value={
                        <>
                            <span className="text-green-500">
                                {charCorrect}
                            </span>
                            /<span className="text-red-500">{typo}</span>
                        </>
                    }
                />
            </div>
            <Button
                variant={'secondary'}
                onClick={onClick}
                className="capitalize">
                {content.buttonText}
                <img src={RestartIcon} alt="restart icon" />
            </Button>
        </div>
    );
}

export default Result;
