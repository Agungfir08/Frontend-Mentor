import { useContext } from 'react';
import { ExtensionsContext } from '../context/ExtensionsContext';

function useExtensionContext() {
    const ctx = useContext(ExtensionsContext);

    if (!ctx) {
        throw new Error('Must be inside Context Provider');
    }

    return ctx;
}

export default useExtensionContext;
