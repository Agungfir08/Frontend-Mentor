import { Button } from '../ui/button';
import IconNewWindow from '@/assets/images/icon-new-window.svg';

interface WordSourceProps {
    source: string;
}
function WordSource({ source }: WordSourceProps) {
    return (
        <div className="flex not-md:flex-col items-start md:items-center gap-1.5 md:gap-5 pt-5 border-t border-neutral-200">
            <h5 className="text-sm text-neutral-500 underline underline-offset-4">
                source
            </h5>
            <Button
                variant="link"
                className="p-0 h-fit text-sm text-neutral-800 dark:text-neutral-0 transition-colors"
                onClick={() =>
                    window.open(source, '_blank', 'noopener,noreferrer')
                }>
                {source}
                <img src={IconNewWindow} alt="new window icon" />
            </Button>
        </div>
    );
}

export default WordSource;
