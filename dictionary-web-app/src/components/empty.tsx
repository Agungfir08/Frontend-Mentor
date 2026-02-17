import { TypingIcon } from './icons';

function Empty() {
    return (
        <div className="text-center space-y-6 pt-12">
            <div className="flex flex-col items-center gap-8">
                <TypingIcon className="text-neutral-500 dark:text-neutral-0" />
                <h1 className="capitalize text-neutral-800 dark:text-neutral-0 text-xl font-bold">
                    Search your word
                </h1>
            </div>
            <p className="text-neutral-500 text-lg">
                Type a word in the search bar above to find its definition,
                phonetics, and synonyms.
            </p>
        </div>
    );
}

export default Empty;
