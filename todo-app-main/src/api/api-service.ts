import supabase from './supabase-client';

export const fetchAllTodos = () => {
    return supabase
        .from('todo')
        .select()
        .order('position', { ascending: true });
};

export const createTodo = (name: string, position: number) => {
    return supabase.from('todo').insert({ name, position }).select();
};

export const deleteTodo = (id: number) => {
    return supabase.from('todo').delete().eq('id', id);
};

export const deleteAllCompletedTodos = () => {
    return supabase.from('todo').delete().eq('is_completed', true);
};

export const updateTodo = (id: number, is_completed: boolean) => {
    return supabase
        .from('todo')
        .update({ is_completed: is_completed })
        .eq('id', id);
};

export const updatesTodosOrder = (todo: { id: number; position: number }[]) => {
    return supabase.from('todo').upsert(todo);
};
