import clsx from 'clsx';
import DeleteIcon from '../assets/icon-delete.svg';
import EditIcon from '../assets/icon-edit.svg';
import ReplyIcon from '../assets/icon-reply.svg';
import { PlusIcon, MinusIcon } from './Icon';

type ButtonType = 'normal' | 'delete' | 'cancel';

interface ButtonProps {
    text: string;
    type?: ButtonType;
    onClick: () => void;
}

function Button({ text, onClick, type = 'normal' }: ButtonProps) {
    return (
        <button
            className={clsx(
                'py-3.5 w-26 h-fit shrink-0 text-white uppercase tracking-sm rounded-lg font-medium cursor-pointer hover:opacity-50',
                {
                    'bg-purple-600': type === 'normal',
                    'bg-red-600': type === 'delete',
                    'bg-grey-500': type === 'cancel',
                }
            )}
            onClick={onClick}>
            {text}
        </button>
    );
}

type ButtonIconType = 'edit' | 'delete' | 'reply';

interface ButtonIconProps {
    onClick: () => void;
    type: ButtonIconType;
}

function ButtonIcon({ onClick, type }: ButtonIconProps) {
    let iconSrc, altText, buttonText;
    switch (type) {
        case 'edit':
            iconSrc = EditIcon;
            altText = 'Edit icon';
            buttonText = 'Edit';
            break;
        case 'delete':
            iconSrc = DeleteIcon;
            altText = 'Delete icon';
            buttonText = 'Delete';
            break;
        case 'reply':
            iconSrc = ReplyIcon;
            altText = 'Reply icon';
            buttonText = 'Reply';
            break;
    }

    return (
        <button
            className={clsx(
                'flex gap-2 items-center cursor-pointer hover:opacity-50',
                {
                    'text-purple-600': type === 'edit' || type === 'reply',
                    'text-pink-400': type === 'delete',
                }
            )}
            onClick={onClick}>
            <img src={iconSrc} alt={altText} />
            <span className="capitalize font-medium">{buttonText}</span>
        </button>
    );
}

interface ButtonUpvote {
    text: number;
    onClickPlus: () => void;
    onClickMinus: () => void;
}

function ButtonUpvote({ text = 0, onClickPlus, onClickMinus }: ButtonUpvote) {
    return (
        <div className="flex lg:flex-col shrink-0 items-center gap-5 w-fit lg:w-10 h-fit max-lg:px-3.5 py-2 bg-grey-100 border-2 border-purple-200/10 rounded-xl">
            <button className="cursor-pointer group" onClick={onClickPlus}>
                <PlusIcon className="group-hover:fill-purple-600" />
            </button>
            <span className="font-medium text-purple-600">{text}</span>
            <button className="cursor-pointer group" onClick={onClickMinus}>
                <MinusIcon className="group-hover:fill-purple-600" />
            </button>
        </div>
    );
}

export { Button, ButtonIcon, ButtonUpvote };
