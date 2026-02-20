import { useEffect, useRef, useCallback } from 'react';

function useSound(src: string) {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio(src);
        audioRef.current.loop = true;

        return () => {
            audioRef.current?.pause();
            audioRef.current = null;
        };
    }, [src]);

    const play = useCallback(() => {
        if (!audioRef.current) return;
        audioRef.current.currentTime = 0;
        audioRef.current?.play();
    }, []);

    const stop = useCallback(() => {
        if (!audioRef.current) return;
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    }, []);

    return { play, stop };
}

export default useSound;
