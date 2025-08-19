interface Country {
    flag: string;
    name: string;
    population: number;
    region: string;
    capital: string | undefined;
}

interface Currency {
    code: string;
    name: string;
    symbol: string;
}

interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}
