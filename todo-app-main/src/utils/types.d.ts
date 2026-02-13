interface Todos {
    id: number;
    name: string;
    is_completed: boolean;
    position: number;
    created_at: string;
}

type TodoContextType = {
    todos: Todos[];
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
    isLoading: boolean;
    activeFilter: Filter;
    handleChangeFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
    createNewTodo: (name: string) => Promise<void>;
    deleteTodoById: (id: number) => Promise<void>;
    updateTodoStatus: (id: number) => Promise<void>;
    deleteCompletedTodos: () => Promise<void>;
    updateTodosOrder: (newTodos: Todos[]) => Promise<void>;
};

type DarkModeContextType = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
};

type Filter = 'all' | 'active' | 'completed';
