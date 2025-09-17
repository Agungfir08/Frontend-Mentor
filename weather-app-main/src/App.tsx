import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProvider } from './context/AppProvider';
import MainPage from './page/MainPage';

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 5 * 60 * 1000, // 5 minutes
                gcTime: 10 * 60 * 1000, // 10 minutes
                retry: false,
                refetchOnWindowFocus: false,
            },
        },
    });
    return (
        <QueryClientProvider client={queryClient}>
            <AppProvider>
                <MainPage />
            </AppProvider>
        </QueryClientProvider>
    );
}

export default App;
