import { useQuery } from '@tanstack/react-query';
import InputSearch from './components/InputSearch';
import ResultCard from './components/ResultCard';
import { fetchIp } from './api/getIp';
import { fetchIpInformation } from './api/getIpInformation';
import { useEffect, useRef, useState } from 'react';
import Map from './components/Map';

function App() {
    const [ipAddress, setIpAddress] = useState('');
    const mapRef = useRef<HTMLDivElement>(null);
    const { data: initialIp } = useQuery({
        queryKey: ['ip'],
        queryFn: fetchIp,
    });

    useEffect(() => {
        if (initialIp?.ip) {
            setIpAddress(initialIp.ip);
        }
    }, [initialIp]);

    const {
        data: ipInformation,
        isLoading,
        isSuccess,
    } = useQuery({
        queryKey: ['ipInformation', ipAddress],
        queryFn: () => fetchIpInformation(ipAddress),
        enabled: !!ipAddress,
    });

    const handleSearch = (searchTerm: string) => {
        setIpAddress(searchTerm);
    };

    useEffect(() => {
        if (isSuccess && window.innerWidth < 768) {
            mapRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isSuccess]);

    return (
        <main className="relative">
            <picture>
                <source
                    srcSet="/images/pattern-bg-desktop.png"
                    media="(width>=768px)"
                />
                <img
                    src="/images/pattern-bg-mobile.png"
                    alt="background image"
                    className="w-full h-[300px] md:h-[280px] object-cover"
                />
            </picture>
            <div className="absolute top-6 left-6 right-6 space-y-6 lg:space-y-12 z-[50]">
                <div className="space-y-[27px]">
                    <h1 className="text-2xl lg:text-[32px] font-semibold -tracking-tight lg:tracking-tight text-white text-center">
                        IP Address Tracker
                    </h1>
                    <InputSearch onSearch={handleSearch} />
                </div>
                <ResultCard data={ipInformation} />
            </div>
            {isLoading || !ipInformation ? (
                <div className="flex space-x-2 justify-center items-center h-dvh md:h-[calc(100vh-280px)] bg-white">
                    <span className="sr-only">Loading...</span>
                    <div className="h-8 w-8 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="h-8 w-8 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="h-8 w-8 bg-gray-400 rounded-full animate-bounce"></div>
                </div>
            ) : (
                <div ref={mapRef}>
                    <Map
                        lat={ipInformation.location.lat}
                        lng={ipInformation.location.lng}
                    />
                </div>
            )}
        </main>
    );
}

export default App;
