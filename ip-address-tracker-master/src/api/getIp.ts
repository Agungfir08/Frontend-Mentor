import { API_CONFIG } from './apiConfig';

export async function fetchIp(): Promise<Pick<IpInformationData, 'ip'>> {
    const url = `${API_CONFIG.BASE_URL_GET_IP}?format=json`;

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error('There is something wrong with the API');
    }

    const data = await res.json();
    return data;
}
