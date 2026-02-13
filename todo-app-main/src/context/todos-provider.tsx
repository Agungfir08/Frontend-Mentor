import { useEffect, useMemo, useState } from 'react';
import {
    createTodo,
    deleteAllCompletedTodos,
    deleteTodo,
    fetchAllTodos,
    updatesTodosOrder,
    updateTodo,
} from '../api/api-service';
import { toast } from 'react-toastify';
import { TodosContext } from './todos-context';

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
    const [todos, setTodos] = useState<Todos[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [activeFilter, setActiveFilter] = useState<Filter>('all');

    useEffect(() => {
        const fetchTodos = async () => {
            setIsLoading(true);

            try {
                const response = await fetchAllTodos();
                if (response.error) {
                    toast.error('Failed fetching todos');
                } else {
                    setTodos(response.data || []);
                }
            } catch (error) {
                toast.error('An unexpected error occurred');
            } finally {
                setIsLoading(false);
            }
        };

        fetchTodos();
    }, []);

    const filteredTodos = useMemo(() => {
        switch (activeFilter) {
            case 'active':
                return todos.filter((todo) => !todo.is_completed);
            case 'completed':
                return todos.filter((todo) => todo.is_completed);
            default:
                return todos;
        }
    }, [activeFilter, todos]);

    const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setActiveFilter(e.target.value as Filter);
    };

    const createNewTodo = async (name: string) => {
        const position = todos.length ? todos[0].position + 1 : 0;

        setIsLoading(true);

        try {
            const response = await createTodo(name, position);
            if (response.error) {
                toast.error('Failed submit todo');
            } else {
                const newTodo = response.data?.[0];
                setTodos((prev) => [...prev, newTodo]);
                toast.success('Todo created successfully');
            }
        } catch (error) {
            toast.error('An unexpected error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    const deleteTodoById = async (id: number) => {
        const todoToDelete = todos.find((todo) => todo.id === id);
        if (!todoToDelete) return;

        setIsLoading(true);

        try {
            const response = await deleteTodo(id);
            if (response.error) {
                toast.error('Failed deleting todo');
            } else {
                setTodos((prev) => prev.filter((todo) => todo.id !== id));
                toast.success('Todo deleted successfully');
            }
        } catch (error) {
            toast.error('An unexpected error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    const updateTodoStatus = async (id: number) => {
        const todoToUpdate = todos.find((todo) => todo.id === id);
        if (!todoToUpdate) return;

        const isCompleted = !todoToUpdate.is_completed;

        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, is_completed: isCompleted } : todo,
            ),
        );

        try {
            const response = await updateTodo(id, isCompleted);
            if (response.error) {
                toast.error('Failed updating todo');
                setTodos((prev) =>
                    prev.map((todo) =>
                        todo.id === id
                            ? { ...todo, is_completed: !isCompleted }
                            : todo,
                    ),
                );
            }
        } catch (error) {
            toast.error('An unexpected error occurred');
            setTodos((prev) =>
                prev.map((todo) =>
                    todo.id === id
                        ? { ...todo, is_completed: !isCompleted }
                        : todo,
                ),
            );
        } finally {
            setIsLoading(false);
        }
    };

    const deleteCompletedTodos = async () => {
        const allCompletedTodos = todos.filter((todo) => todo.is_completed);
        if (allCompletedTodos.length === 0) {
            toast.info('No completed todos to delete');
            return;
        }

        setIsLoading(true);

        try {
            const response = await deleteAllCompletedTodos();
            if (response.error) {
                toast.error('Failed deleting all completed todos');
            } else {
                setTodos((prev) => prev.filter((todo) => !todo.is_completed));
                toast.success('All completed todos deleted successfully');
            }
        } catch (error) {
            toast.error('An unexpected error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    const updateTodosOrder = async (newTodos: Todos[]) => {
        const updatesTodos = newTodos.map((todo, index) => ({
            id: todo.id,
            position: index,
        }));

        try {
            const response = await updatesTodosOrder(updatesTodos);
            if (response.error) {
                toast.error('Failed updating order');
            }
        } catch (error) {
            toast.error('An unexpected error occurred');
        }
    };

    const value = {
        todos: filteredTodos,
        setTodos,
        isLoading,
        activeFilter,
        handleChangeFilter,
        createNewTodo,
        deleteTodoById,
        updateTodoStatus,
        deleteCompletedTodos,
        updateTodosOrder,
    };

    return (
        <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
    );
};
