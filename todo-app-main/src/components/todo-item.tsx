import Checkbox from './ui/checkbox';
import CrossIcon from '../assets/images/icon-cross.svg';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { DragIcon } from './icons';
import type { CSSProperties } from 'react';
import UseTodos from '../hook/useTodos';

interface TodoItemProps {
    id: number;
    name: string;
    is_completed: boolean;
    draggable: boolean;
}

function TodoItem({ id, name, is_completed, draggable }: TodoItemProps) {
    const { deleteTodoById, updateTodoStatus } = UseTodos();

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id });

    const style: CSSProperties = {
        transform: CSS.Translate.toString(transform),
        transition,
        zIndex: isDragging ? 100 : 'auto',
        position: 'relative',
    };
    return (
        <div
            ref={setNodeRef}
            style={style}
            className="bg-white dark:bg-navy-900 flex items-center justify-between h-fit px-5 py-4 md:p-6 group">
            {draggable && (
                <div
                    {...attributes}
                    {...listeners}
                    className="cursor-grab active:cursor-grabbing mr-3 shrink-0">
                    <DragIcon />
                </div>
            )}
            <div className="flex-1">
                <Checkbox
                    label={name}
                    id={`todos-${id}`}
                    checked={is_completed}
                    onChange={() => updateTodoStatus(id)}
                />
            </div>

            <button
                className="cursor-pointer"
                onClick={() => deleteTodoById(id)}>
                <img src={CrossIcon} alt="cross icon" className="size-3" />
            </button>
        </div>
    );
}

export default TodoItem;
