import useDictionaryStore from '@/store/dictionary-store';
import WordDefinition from './word-definition';
import WordHeading from './word-heading';
import Empty from '../empty';
import Error from '../error';
import Loading from '../loading';
import WordSource from './word-source';

function WordInfo() {
    const data = useDictionaryStore((s) => s.data);
    const isError = useDictionaryStore((s) => s.isError);
    const isLoading = useDictionaryStore((s) => s.isLoading);

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <Error />;
    }

    if (!data) {
        return <Empty />;
    }

    const phoneticText =
        data.phonetic || data.phonetics?.find((p) => p.text)?.text || '';

    const audioSource =
        data.phonetics.find((p) => p.audio?.includes('-us'))?.audio ||
        data.phonetics.find((p) => p.audio && p.audio !== '')?.audio ||
        '';

    return (
        <div className="space-y-7 md:space-y-10">
            <WordHeading
                word={data.word}
                phonetic={phoneticText}
                audioSrc={audioSource}
            />
            <div className="space-y-8 md:space-y-10">
                {data.meanings.map(
                    ({ partOfSpeech, definitions, synonyms }, index) => (
                        <WordDefinition
                            key={index}
                            partOfSpeech={partOfSpeech}
                            definitions={definitions}
                            synonyms={synonyms}
                        />
                    ),
                )}
            </div>
            <WordSource source={data.sourceUrls[0]} />
        </div>
    );
}

export default WordInfo;
