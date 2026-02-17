import { useEffect, useRef, useState } from 'react';
import { PlayIcon } from '../icons';
import { PauseIcon } from '../icons';

interface AudioButtonProps {
    source: string;
}

function AudioButton({ source }: AudioButtonProps) {
    const audioRef = useRef(new Audio(source));
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    useEffect(() => {
        const audio = audioRef.current;

        audio.addEventListener('ended', () => setIsPlaying(false));

        return () =>
            audio.removeEventListener('ended', () => setIsPlaying(false));
    }, []);

    const toggleAudio = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying((prev) => !prev);
    };

    return (
        <button
            className="relative size-14 md:size-18.75 bg-purple-500/25 rounded-full flex justify-center items-center cursor-pointer select-none"
            onClick={toggleAudio}>
            <PlayIcon
                className={`absolute h-5 md:h-7 w-auto text-purple-500 animate-audio-animate ${isPlaying && 'hidden'}`}
            />
            <PauseIcon
                className={`absolute h-5 md:h-7 w-auto text-purple-500 animate-audio-animate ${!isPlaying && 'hidden'}`}
            />
        </button>
    );
}

export default AudioButton;
