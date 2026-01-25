import { useCallback, useEffect, useState } from 'react';

export function useTyping({
    text,
    isFocused,
    onStart,
    onFinish,
    setCharCount,
    setTypoCount,
}: Omit<TypingAreaProps, 'onBlur'>) {
    const words = text.split(' ');

    const [wordIndex, setWordIndex] = useState(0);
    const [typedWord, setTypedWord] = useState(() => words.map(() => ''));

    useEffect(() => {
        setTypedWord(words.map(() => ''));
        setWordIndex(0);
    }, [text]);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            const key = e.key;
            const currentWord = typedWord[wordIndex];

            if (!isFocused) {
                e.preventDefault();
                return;
            }

            if (
                key.length === 1 &&
                wordIndex === 0 &&
                typedWord[0].length === 0
            ) {
                onStart();
            }

            if (key === 'Backspace') {
                e.preventDefault();

                if (typedWord[wordIndex].length === 0 && wordIndex > 0) {
                    setWordIndex((idx) => idx - 1);
                    return;
                }

                const removeIdx = currentWord.length - 1;
                const removeChar = currentWord[removeIdx];
                const expectedRemove = words[wordIndex][removeIdx];
                const wasTypo =
                    removeChar !== expectedRemove ||
                    expectedRemove === undefined;

                setTypedWord((prev) =>
                    prev.map((w, idx) =>
                        idx === wordIndex ? w.slice(0, -1) : w,
                    ),
                );
                if (wasTypo) setTypoCount((typo) => Math.max(0, typo - 1));
                setCharCount((char) => Math.max(0, char - 1));
                return;
            }

            if (key === ' ') {
                e.preventDefault();

                if (typedWord[wordIndex].length > 0) {
                    if (typedWord[wordIndex].length < words[wordIndex].length) {
                        const missingChar =
                            words[wordIndex].length -
                            typedWord[wordIndex].length;
                        setTypoCount((typo) => typo + missingChar);
                        setCharCount((char) => char + missingChar);
                        setTypedWord((prev) => {
                            const newTyped = [...prev];

                            newTyped[wordIndex] =
                                prev[wordIndex] + ' '.repeat(missingChar);
                            return newTyped;
                        });
                    }
                    setWordIndex((idx) => Math.min(idx + 1, words.length - 1));
                }
                return;
            }

            if (key.length !== 1) return;

            const nextChar = currentWord + key;

            setTypedWord((prev) =>
                prev.map((w, idx) => (idx === wordIndex ? nextChar : w)),
            );

            const newCharIndex = currentWord.length;
            const expectedChar = words[wordIndex][newCharIndex];

            if (expectedChar === undefined || expectedChar !== key)
                setTypoCount((typo) => typo + 1);

            setCharCount((char) => char + 1);

            if (
                wordIndex === words.length - 1 &&
                nextChar.length >= words[wordIndex].length
            ) {
                onFinish();
            }
        },
        [
            isFocused,
            wordIndex,
            typedWord,
            words,
            onStart,
            onFinish,
            setCharCount,
            setTypoCount,
        ],
    );

    return {
        words,
        wordIndex,
        typedWord,
        handleKeyDown,
    };
}
