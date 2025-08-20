import { NextResponse } from 'next/server';
import countriesData from '../../data.json';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);

        const country = searchParams.get('country')?.toLowerCase() || '';
        const alpha3Code = searchParams.get('alpha3Code')?.toLowerCase() || '';
        const region = searchParams.get('region')?.toLowerCase() || '';
        const page = Number(searchParams.get('page')) || 1;

        const pageSize = 12;
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        let filteredCountries = countriesData;
        if (alpha3Code) {
            filteredCountries = countriesData.filter((country) => {
                return country.alpha3Code?.toLowerCase() === alpha3Code;
            });
        } else if (country || region) {
            filteredCountries = countriesData.filter((countryData) => {
                const name = (countryData.name?.toLowerCase() || '').includes(
                    country
                );
                const regionMatch = (
                    countryData.region?.toLowerCase() || ''
                ).includes(region);
                return name && regionMatch;
            });
        }

        const paginatedCountries = filteredCountries.slice(
            startIndex,
            endIndex
        );

        const totalPages = Math.ceil(filteredCountries.length / pageSize);

        return NextResponse.json({
            data: paginatedCountries,
            total: filteredCountries.length,
            page,
            totalPages,
        });
    } catch (error) {
        console.error('Error in API route:', error);
        return NextResponse.json(
            { error: 'Failed to fetch countries data', message: error.message },
            { status: 500 }
        );
    }
}
