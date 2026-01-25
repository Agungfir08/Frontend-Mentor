import { Button } from './UI/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './UI/dialog';
import HistoryIcon from '@/assets/images/icon-history.svg';
import HistoryTable from './history-table';
import { useTypingStore } from '@/store/store';

function GameHistory() {
    const history = useTypingStore((s) => s.history);
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'outline'} size={'icon-sm'}>
                    <img
                        src={HistoryIcon}
                        alt="history icon"
                        className="size-4"
                    />
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-neutral-800 [&>button]:hidden">
                <DialogHeader>
                    <DialogTitle className="text-neutral-0">
                        History
                    </DialogTitle>
                    <DialogDescription className="text-neutral-400">
                        This is your game history.
                    </DialogDescription>
                </DialogHeader>
                {history.length === 0 ? (
                    <div className="h-40 flex justify-center items-center">
                        <h2 className="text-neutral-0 text-preset-five">
                            No game history
                        </h2>
                    </div>
                ) : (
                    <HistoryTable history={history} />
                )}
            </DialogContent>
        </Dialog>
    );
}

export default GameHistory;
