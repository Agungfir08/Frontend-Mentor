import { Button } from './ui/button';

interface ErrorProps {
    errorMsg: string;
    onClickRetry: () => void;
}

function Error({ errorMsg, onClickRetry }: ErrorProps) {
    return (
        <div className="pt-10 flex flex-col items-center gap-6">
            <img
                src="/images/icon-error.svg"
                alt="error icon"
                className="w-[42px] h-auto"
            />
            <h1 className="heading-2 text-neutral-0">Something went wrong</h1>
            <p className="body-xl-medium text-neutral-200 max-w-[554px] text-center">
                {errorMsg}
            </p>
            <Button onClick={onClickRetry}>
                <img src="/images/icon-retry.svg" alt="retry icon" />
                Retry
            </Button>
        </div>
    );
}

export default Error;
