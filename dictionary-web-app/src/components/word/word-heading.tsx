import AudioButton from '../ui/audio-button';

interface WordHeadingProps {
    word: string;
    phonetic: string;
    audioSrc: string;
}

function WordHeading({ word, phonetic, audioSrc }: WordHeadingProps) {
    return (
        <div className="flex justify-between items-center">
            <div className="flex flex-col">
                <h1 className="text-[32px] md:text-[64px] text-neutral-800 dark:text-neutral-0">
                    {word}
                </h1>
                <h4 className="text-lg md:text-2xl text-purple-500">
                    {phonetic}
                </h4>
            </div>
            {audioSrc && <AudioButton source={audioSrc} />}
        </div>
    );
}

export default WordHeading;
