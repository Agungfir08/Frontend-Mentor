import useDictionaryStore from '@/store/dictionary-store';
import { Button } from '../ui/button';

interface WordDefinitionProps {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
}
function WordDefinition({
    partOfSpeech,
    definitions,
    synonyms,
}: WordDefinitionProps) {
    const fetchDictionaryEntry = useDictionaryStore(
        (s) => s.fetchDictionaryEntry,
    );

    return (
        <div className="space-y-8 md:space-y-10">
            <div className="flex items-center gap-5">
                <h4 className="text-lg md:text-2xl text-neutral-800 dark:text-neutral-0 font-bold italic">
                    {partOfSpeech}
                </h4>
                <div className="h-px w-full bg-neutral-200"></div>
            </div>
            <div className="space-y-6">
                <h5 className="text-base md:text-xl text-neutral-500">
                    Meaning
                </h5>
                {definitions.map(({ definition, example }, index) => (
                    <ul
                        key={index}
                        className="list-disc marker:text-purple-500 ml-5 lg:ml-10.5">
                        <li className="text-[15px] md:text-lg pl-2.5 space-y-3">
                            <h3 className="text-neutral-800  dark:text-neutral-0">
                                {definition}
                            </h3>
                            {example && (
                                <h3 className="text-neutral-500">{`"${example}"`}</h3>
                            )}
                        </li>
                    </ul>
                ))}
                {synonyms.length > 0 && (
                    <div className="flex items-start gap-6">
                        <h5 className="text-base md:text-xl text-neutral-500">
                            Synonyms
                        </h5>
                        <div className="space-x-2">
                            {synonyms.map((synonym, index) => (
                                <Button
                                    key={index}
                                    variant="link"
                                    className="p-0 h-fit text-base md:text-xl font-bold text-purple-500"
                                    onClick={() =>
                                        fetchDictionaryEntry(synonym)
                                    }>
                                    {synonym}
                                </Button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WordDefinition;
