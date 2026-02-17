import SadIcon from '@/assets/images/icon-sad.svg';
function Error() {
    return (
        <div className="text-center space-y-4 pt-10">
            <div className="flex flex-col items-center gap-8">
                <img src={SadIcon} alt="sad icon" className="size-15" />
                <h1 className="capitalize text-neutral-800 dark:text-neutral-0 text-xl font-bold">
                    no definitions found
                </h1>
            </div>
            <p className="text-neutral-500 text-lg">
                Sorry pal, we couldn't find definitions for the word you were
                looking for. You can try the search again at later time or head
                to the web instead.
            </p>
        </div>
    );
}

export default Error;
