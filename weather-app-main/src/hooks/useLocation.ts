import { useState, useEffect } from 'react';

interface LocationState {
    latitude: number;
    longitude: number;
}

function useLocation() {
    const [location, setLocation] = useState<LocationState>({
        latitude: 0,
        longitude: 0,
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    const success = (position: GeolocationPosition) => {
        setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        });
        setLoading(false);
    };

    const failed = (err: GeolocationPositionError) => {
        let errMsg: string;

        switch (err.code) {
            case err.PERMISSION_DENIED:
                errMsg =
                    'Location permission denied. Please enable location access.';
                break;
            case err.POSITION_UNAVAILABLE:
                errMsg = 'Location information is unavailable.';
                break;
            case err.TIMEOUT:
                errMsg = 'Location request timed out.';
                break;
            default:
                errMsg = 'An unknown error occurred.';
        }
        setError(errMsg);
        setLoading(false);
    };

    const getLocation = () => {
        setLoading(true);

        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser.');
            setLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(success, failed, options);
    };

    useEffect(() => {
        getLocation();
    }, []);

    return { location, loading, error };
}

export default useLocation;
