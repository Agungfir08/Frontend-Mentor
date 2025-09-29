import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Recipes from './pages/Recipes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RecipeDetail from './pages/RecipeDetail';

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 0,
                gcTime: 0,
            },
        },
    });
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="recipes">
                            <Route index element={<Recipes />} />
                            <Route path=":id" element={<RecipeDetail />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
