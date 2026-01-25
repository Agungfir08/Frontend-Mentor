import { Button } from './UI/button';

interface OverlayProps {
    focused: boolean;
    setFocused: (focused: boolean) => void;
}

function Overlay({ focused, setFocused }: OverlayProps) {
    if (focused) return null;

    const handleFocused = () => {
        setFocused(true);
    };

    return (
        <div
            className="absolute inset-0 z-20 flex flex-col gap-5 items-center justify-center bg-neutral-900/50 backdrop-blur-sm transition-all duration-300"
            onClick={() => setFocused(true)}>
            <Button onClick={handleFocused}>Start Typing Test</Button>
            <span className="text-preset-three-semibold text-neutral-0">
                Or click the text and start typing
            </span>
        </div>
    );
}

export default Overlay;
