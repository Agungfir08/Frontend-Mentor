import { Button } from './ui/button';

interface ErrorProps {
    errorMsg: string;
    onClickRetry: () => void;
}

function Error({ errorMsg, onClickRetry }: ErrorProps) {
    return (
        <div className="pt-10 w-full mx-auto space-y-6">
            <img src="/images/icon-error.svg" alt="error icon" />
            <h1 className="heading-2">Something went wrong</h1>
            <p className="body-xl-medium">{errorMsg}</p>
            <Button onClick={onClickRetry}>
                <img src="/images/icon-retry.svg" alt="retry icon" />
                Retry
            </Button>
        </div>
    );
}

export default Error;
