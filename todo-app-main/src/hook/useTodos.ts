import { useContext } from 'react';
import { TodosContext } from '../context/todos-context';

function UseTodos() {
    const ctx = useContext(TodosContext);
    if (!ctx) {
        throw new Error('useTodos must be used within provider');
    }

    return ctx;
}

export default UseTodos;
