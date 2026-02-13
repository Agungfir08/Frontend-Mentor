import { closestCenter, DndContext, type DragEndEvent } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import UseTodos from '../hook/useTodos';
import TodoItem from './todo-item';

function DraggableTodos() {
    const { todos, setTodos, updateTodosOrder } = UseTodos();

    const handleChangeOrder = (e: DragEndEvent) => {
        const { active, over } = e;

        if (!over || active.id === over.id) return;

        const oldIdx = todos.findIndex((todo) => todo.id === active.id);
        const newIdx = todos.findIndex((todo) => todo.id === over.id);

        const newTodos = arrayMove(todos, oldIdx, newIdx);
        setTodos(newTodos);

        updateTodosOrder(newTodos);
    };
    return (
        <DndContext
            collisionDetection={closestCenter}
            modifiers={[restrictToVerticalAxis]}
            onDragEnd={handleChangeOrder}>
            <SortableContext
                items={todos.map((t) => t.id)}
                strategy={verticalListSortingStrategy}>
                {todos.map(({ id, name, is_completed }) => (
                    <div
                        key={id}
                        className="*:border-b *:border-purple-300 dark:*:border-purple-800">
                        <TodoItem
                            id={id}
                            name={name}
                            is_completed={is_completed}
                            draggable
                        />
                    </div>
                ))}
            </SortableContext>
        </DndContext>
    );
}

export default DraggableTodos;
