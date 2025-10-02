import { API_CONFIG } from './apiConfig';

export async function fetchIpInformation(
    searchTerm: string
): Promise<IpInformationData> {
    const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;

    const domainRegex =
        /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;

    let url = `${API_CONFIG.BASE_URL_GET_IP_INFORMATION}?apiKey=${API_CONFIG.API_KEY}`;

    if (ipRegex.test(searchTerm)) {
        url += `&ipAddress=${searchTerm}`;
    } else if (domainRegex.test(searchTerm)) {
        url += `&domain=${searchTerm}`;
    } else {
        throw new Error(
            'Invalid input: Please enter a valid IP address or domain.'
        );
    }

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(
            'There is something wrong with the API or the input provided.'
        );
    }

    const data = (await res.json()) as IpInformationData;

    return data;
}
