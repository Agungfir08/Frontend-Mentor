import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ToastContainer, Zoom } from 'react-toastify';
import { TodosProvider } from './context/todos-provider.tsx';
import DarkModeProvider from './context/darkmode-provider.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <DarkModeProvider>
            <TodosProvider>
                <App />
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                    theme="light"
                    transition={Zoom}
                />
            </TodosProvider>
        </DarkModeProvider>
    </StrictMode>,
);
