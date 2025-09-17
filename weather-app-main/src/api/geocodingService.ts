import { API_CONFIG } from './apiConfig';

interface GeocodingResult {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    elevation?: number;
    feature_code?: string;
    country_code: string;
    admin1_id?: number;
    admin2_id?: number;
    admin3_id?: number;
    admin4_id?: number;
    timezone?: string;
    population?: number;
    postcodes?: string[];
    country_id?: number;
    country?: string;
    admin1?: string;
    admin2?: string;
    admin3?: string;
    admin4?: string;
}

interface GeocodingResponse {
    results: GeocodingResult[];
}

export const fetchGeocoding = async (
    cityName: string
): Promise<GeocodingResponse> => {
    if (!cityName || cityName.trim().length === 0) return { results: [] };

    const api = `${API_CONFIG.GEOCODING_URL}?name=${encodeURIComponent(
        cityName
    )}`;

    try {
        const res = await fetch(api);

        if (!res.ok) {
            throw new Error('Failed to fetch geocoding data');
        }

        const data = await res.json();

        return {
            results: data.results,
        };
    } catch (error) {
        console.error(error);

        return { results: [] };
    }
};
