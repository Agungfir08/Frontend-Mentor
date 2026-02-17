type ThemeStoreState = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
};

type FontType = 'sans serif' | 'serif' | 'mono';

type FontStoreState = {
    fontType: FontType;
    onChangeFontType: (font: FontType) => void;
};

type FONT_TYPES = {
    label: string;
    className: string;
    value: FontType;
};

interface DictionaryEntry {
    word: string;
    phonetic?: string;
    phonetics: Phonetic[];
    meanings: Meaning[];
    license: License;
    sourceUrls: string[];
}

interface Phonetic {
    text?: string;
    audio?: string;
    sourceUrl?: string;
    license?: License;
}

interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[];
}

interface Definition {
    definition: string;
    synonyms: string[];
    antonyms: string[];
    example?: string;
}

interface License {
    name: string;
    url: string;
}
