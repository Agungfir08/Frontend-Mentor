import { useState } from 'react';
import Header from './components/header';
import InputField from './components/input-field';
import WordInfo from './components/word/word-info';
import useDictionaryStore from './store/dictionary-store';

function App() {
    const [wordSearch, setWordSearch] = useState<string>('');
    const fetchDictionaryEntry = useDictionaryStore(
        (s) => s.fetchDictionaryEntry,
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetchDictionaryEntry(wordSearch);
        setWordSearch('');
    };

    return (
        <>
            <Header />
            <main className="space-y-6.25 md:space-y-10 mt-6 md:mt-14 lg:mt-12">
                <form onSubmit={handleSubmit}>
                    <InputField
                        placeholder="Search for any word..."
                        value={wordSearch}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setWordSearch(e.target.value)
                        }
                    />
                </form>
                <WordInfo />
            </main>
        </>
    );
}

export default App;
