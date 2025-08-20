interface NativeName {
    [key: string]: {
        common: string;
        official: string;
    };
}

interface CountryName {
    common: string;
    official: string;
    nativeName: NativeName;
}

interface CountryFlag {
    svg: string;
    png: string;
    alt: string;
}

interface Country {
    flags: CountryFlag;
    name: CountryName;
    population: number;
    region: string;
    capital: string[];
}

interface Language {
    [key: string]: string;
}

interface Currency {
    [key: string]: {
        symbol: string;
        name: string;
    };
}

interface CountryDetail {
    flags: CountryFlag;
    name: CountryName;
    population: number;
    region: string;
    subregion: string;
    capital: string[];
    tld: string[];
    currencies: Currency;
    languages: Language;
    borders: string[];
}
