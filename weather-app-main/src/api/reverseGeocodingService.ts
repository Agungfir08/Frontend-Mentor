import { API_CONFIG } from './apiConfig';

export interface Root {
    type: string;
    features: Feature[];
    query: Query;
}

export interface Feature {
    type: string;
    properties: Pick<Properties, 'country' | 'city'>;
    geometry: Geometry;
    bbox: number[];
}

export interface Properties {
    country: string;
    city: string;
}

export interface Geometry {
    type: string;
    coordinates: number[];
}

export interface Query {
    lat: number;
    lon: number;
    plus_code: string;
}

export async function fetchReverseGeocoding(
    coordinate: Coordinate
): Promise<{ city?: string; country?: string }> {
    const params = new URLSearchParams({
        lat: coordinate.latitude.toString(),
        lon: coordinate.longitude.toString(),
        apiKey: API_CONFIG.GEOAPIFY_API_KEY,
    });

    const api = `${API_CONFIG.REVERSE_URL}${params.toString()}`;

    try {
        const res = await fetch(api);

        if (!res.ok) {
            throw new Error('failed to fetch reverse geocoding');
        }

        const data = (await res.json()) as Root;

        const city = data.features[0].properties.city;
        const country = data.features[0].properties.country;

        return {
            city,
            country,
        };
    } catch (error) {
        console.error(error);
        return { city: '', country: '' };
    }
}
