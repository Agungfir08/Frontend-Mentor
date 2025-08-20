'use server';

const url = 'https://restcountries.com/v3.1';

export async function getCountries(
    page: number,
    country?: string,
    region?: string
) {
    try {
        const pageSize = 8;
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        const fields = [
            'name',
            'capital',
            'region',
            'population',
            'flags',
        ].join(',');

        const res = await fetch(`${url}/all?fields=${fields}`, {
            next: { revalidate: 86400 },
        });
        const allCountries = await res.json();

        const data = allCountries.filter((countryData: Country) => {
            const countryName = (
                countryData.name.common.toLowerCase() || ''
            ).includes(country?.toLowerCase() || '');
            const regionName = (
                countryData.region.toLowerCase() || ''
            ).includes(region?.toLowerCase() || '');
            return countryName && regionName;
        });

        const countries = data.slice(startIndex, endIndex);
        const totalPages = Math.ceil(data.length / pageSize);

        return { data: countries, totalPages };
    } catch (error) {
        console.error('Error fetching countries:', error);
        return { data: [], totalPages: 0 };
    }
}

export async function getCountryByName(name: string) {
    try {
        const res = await fetch(`${url}/name/${name}`);
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);

        const data = await res.json();
        return data[0];
    } catch (error) {
        console.error('Error fetching country by name:', error);
        throw new Error('Failed to fetch country by name');
    }
}

export async function getCountryByAlphaCode(code: string) {
    try {
        const res = await fetch(`${url}/alpha/${code}`);
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);

        const data = await res.json();
        return data[0];
    } catch (error) {
        console.error('Error fetching country by name:', error);
        throw new Error('Failed to fetch country by name');
    }
}
