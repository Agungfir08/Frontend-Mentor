import { cn } from '@/lib/utils';
import { memo } from 'react';

interface WordProps {
    word: string;
    typed: string;
    isActive: boolean;
    isFocused: boolean;
    scrollRef?: React.Ref<HTMLDivElement>;
}

export const Word = memo(
    ({ word, typed, isActive, isFocused, scrollRef }: WordProps) => {
        return (
            <div
                ref={scrollRef}
                className={cn(
                    'relative z-10 px-1.5 space-y-1 transition-all ease-in-out duration-200',
                )}>
                {word.split('').map((letter, letterIdx) => {
                    const isTyped = letterIdx < typed.length;
                    const isCorrect = isTyped && typed[letterIdx] === letter;
                    const isIncorrect = isTyped && typed[letterIdx] !== letter;
                    const isCursorActive =
                        isActive && letterIdx === typed.length && isFocused;

                    return (
                        <span
                            key={letter + letterIdx}
                            className={cn({
                                'text-green-500': isCorrect,
                                'text-red-500 underline': isIncorrect,
                                'relative before:absolute before:-z-10 before:inset-0 before:bg-neutral-0/20 before:rounded-sm':
                                    isCursorActive,
                            })}>
                            {letter}
                        </span>
                    );
                })}
                {typed
                    .slice(word.length)
                    .split('')
                    .map((_, i) => (
                        <span
                            key={i + 'extra'}
                            className="text-red-500 underline">
                            {typed[word.length + i]}
                        </span>
                    ))}
            </div>
        );
    },
    (prev, next) => {
        return (
            prev.isActive === next.isActive &&
            prev.typed === next.typed &&
            prev.isFocused === next.isFocused
        );
    },
);
