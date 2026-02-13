import { EmptyIcon } from './icons';
import UseTodos from '../hook/useTodos';
import FilterButton from './filter-buttons';
import DraggableTodos from './draggable-todos';
import TodoItem from './todo-item';
import Loader from './ui/loader';
import { pluralize } from '../utils/util';
import { useMemo } from 'react';

const EmptyTodos = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <EmptyIcon className="fill-navy-850 dark:fill-purple-300 w-1/3" />
        </div>
    );
};

const FilterTodos = () => {
    const { todos } = UseTodos();

    return (
        <>
            {todos.map(({ id, name, is_completed }) => (
                <div
                    key={id}
                    className="*:border-b *:border-purple-300 dark:*:border-purple-800">
                    <TodoItem
                        id={id}
                        name={name}
                        is_completed={is_completed}
                        draggable={false}
                    />
                </div>
            ))}
        </>
    );
};

function TodoList() {
    const { todos, isLoading, activeFilter, deleteCompletedTodos } = UseTodos();

    const uncompletedTodos = useMemo(
        () => todos.filter((todo) => todo.is_completed === false),
        [todos],
    );

    const renderContent = () => {
        if (isLoading) return <Loader />;
        if (todos.length === 0) return <EmptyTodos />;
        if (activeFilter === 'all') return <DraggableTodos />;
        return <FilterTodos />;
    };

    return (
        <div className="space-y-4 relative">
            <div className="bg-white dark:bg-navy-900 rounded-md shadow-md overflow-hidden">
                <div className="h-79.5 md:h-109.5 overflow-y-auto no-scrollbar">
                    {renderContent()}
                </div>
                <div
                    className={`flex items-center justify-between px-5 py-4 md:p-6 ${todos.length < 6 && 'border-t border-purple-300 dark:border-purple-800'}`}>
                    <span className="text-gray-600 text-xs md:text-sm tracking-tight leading-none">{`${uncompletedTodos.length} ${pluralize('item', uncompletedTodos.length)} left`}</span>
                    <button
                        onClick={deleteCompletedTodos}
                        className="text-gray-600 text-xs md:text-sm tracking-tight leading-none cursor-pointer">
                        Clear Completed
                    </button>
                </div>
            </div>
            <div className="not-md:bg-white dark:not-md:bg-navy-900 not-md:w-full rounded-sm not-md:shadow-md py-4 md:absolute md:bottom-2 md:left-1/2 md:transform md:-translate-x-1/2">
                <FilterButton />
            </div>
        </div>
    );
}

export default TodoList;
