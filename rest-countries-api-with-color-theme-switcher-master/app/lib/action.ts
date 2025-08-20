export async function getCountries(
    country: string,
    page: number,
    region: string
) {
    try {
        const url = new URL(
            `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api`
        );

        url.searchParams.set('country', country);
        url.searchParams.set('page', page.toString());
        url.searchParams.set('region', region);

        const res = await fetch(url.toString(), {
            cache: 'no-store',
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.status}`);
        }

        const data = await res.json();

        return data;
    } catch (error) {
        console.error('Error fetching countries:', error);
        return { data: [], total: 0, page: 1, totalPages: 0 };
    }
}

export async function getCountryByName(name: string) {
    try {
        const url = new URL(
            `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api`
        );

        url.searchParams.set('country', name);

        const res = await fetch(url.toString(), {
            cache: 'no-store',
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch country: ${res.status}`);
        }

        const data = await res.json();

        return data.data?.[0] || null;
    } catch (error) {
        console.error('Error fetching country by name:', error);
        throw new Error('Failed to fetch country by name');
    }
}

export async function getCountryByAlpha3Code(code: string) {
    try {
        const url = new URL(
            `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api`
        );
        url.searchParams.set('alpha3Code', code);

        const res = await fetch(url.toString(), { cache: 'no-store' });

        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);

        const data = await res.json();
        return data.data?.[0] || null;
    } catch (error) {
        console.error(error);
        return null;
    }
}
