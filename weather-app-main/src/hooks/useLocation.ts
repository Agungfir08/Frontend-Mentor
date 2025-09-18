import { useState, useEffect } from 'react';

function useLocation() {
    const [location, setLocation] = useState<Coordinate>({
        latitude: 0,
        longitude: 0,
    });
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
    };

    const getLocation = () => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser.');
            return;
        }

        navigator.geolocation.getCurrentPosition(success, failed, options);
    };

    useEffect(() => {
        getLocation();
    }, []);

    return { location, error, getLocation };
}

export default useLocation;
