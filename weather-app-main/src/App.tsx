import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProvider } from './context/AppProvider';
import MainPage from './page/MainPage';
import { BrowserRouter } from 'react-router';
import MainLayout from './components/MainLayout';

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 15 * 60 * 1000,
                retry: false,
                refetchOnWindowFocus: false,
            },
        },
    });
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <AppProvider>
                    <MainLayout>
                        <MainPage />
                    </MainLayout>
                </AppProvider>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
