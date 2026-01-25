import { useTyping } from '@/assets/hooks/useTyping';
import { memo, useEffect, useRef } from 'react';
import { Word } from './word';

function TypingArea({
    text,
    isFocused,
    onBlur,
    onStart,
    onFinish,
    setCharCount,
    setTypoCount,
}: TypingAreaProps) {
    const { words, wordIndex, typedWord, handleKeyDown } = useTyping({
        text,
        isFocused,
        onStart,
        onFinish,
        setCharCount,
        setTypoCount,
    });

    const typeRef = useRef<HTMLDivElement>(null);
    const activeWordRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isFocused) typeRef.current?.focus();
    }, [isFocused]);

    useEffect(() => {
        if (activeWordRef.current) {
            activeWordRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }, [wordIndex]);

    return (
        <div
            ref={typeRef}
            role="textbox"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className={
                'relative text-preset-one-regular flex flex-wrap focus:outline-none text-neutral-400 h-41 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'
            }
            onBlur={onBlur}>
            {words.map((word, wordIdx) => {
                const isCurrentWord = wordIdx === wordIndex;

                return (
                    <Word
                        key={word + wordIdx}
                        word={word}
                        typed={typedWord[wordIdx] || ''}
                        isActive={isCurrentWord}
                        isFocused={isFocused}
                        scrollRef={isCurrentWord ? activeWordRef : null}
                    />
                );
            })}
        </div>
    );
}

export default memo(TypingArea);
