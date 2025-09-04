import clsx from 'clsx';
import DeleteIcon from '../assets/icon-delete.svg';
import EditIcon from '../assets/icon-edit.svg';
import ReplyIcon from '../assets/icon-reply.svg';
import {MinusIcon, PlusIcon} from './Icon';

type ButtonType = 'normal' | 'delete' | 'cancel';

interface ButtonProps {
    text: string;
    type?: ButtonType;
    onClick?: () => void;
    disabled?: boolean;
    htmlType?: 'button' | 'submit' | 'reset';
    grow?: boolean;
}

function Button({text, onClick, type = 'normal', disabled, htmlType = 'button', grow = false}: ButtonProps) {
    return (
        <button
            type={htmlType}
            className={clsx(
                'py-3.5 w-26 h-fit shrink-0 text-white uppercase tracking-sm rounded-lg font-medium hover:opacity-50',
                {
                    'bg-purple-600': type === 'normal',
                    'bg-red-600': type === 'delete',
                    'bg-grey-500': type === 'cancel',
                    'cursor-not-allowed opacity-50': disabled,
                    'cursor-pointer': !disabled,
                    'grow': grow
                }
            )}
            onClick={onClick}
            disabled={disabled}>
            {text}
        </button>
    );
}

type ButtonIconType = 'edit' | 'delete' | 'reply';

interface ButtonIconProps {
    onClick: () => void;
    type: ButtonIconType;
}

function ButtonIcon({onClick, type}: ButtonIconProps) {
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
            <img src={iconSrc} alt={altText}/>
            <span className="capitalize font-medium">{buttonText}</span>
        </button>
    );
}

interface ButtonUpvote {
    text: number;
    onClickPlus: () => void;
    onClickMinus: () => void;
    disabledPlus: boolean;
    disabledMinus: boolean;
}

function ButtonUpvote({text = 0, onClickPlus, onClickMinus, disabledPlus, disabledMinus}: ButtonUpvote) {
    return (
        <div
            className="flex lg:flex-col shrink-0 items-center gap-5 w-fit lg:w-10 h-fit max-lg:px-3.5 py-2 bg-grey-100 border-2 border-purple-200/10 rounded-xl">
            <button className={clsx("group", {
                'cursor-not-allowed': disabledPlus,
                'cursor-pointer': !disabledPlus,
            })} onClick={onClickPlus}>
                <PlusIcon className="group-hover:fill-purple-600"/>
            </button>
            <span className="font-medium text-purple-600">{text}</span>
            <button className={clsx("group", {
                'cursor-not-allowed': disabledMinus,
                'cursor-pointer': !disabledMinus,
            })} onClick={onClickMinus}>
                <MinusIcon className="group-hover:fill-purple-600"/>
            </button>
        </div>
    );
}

export {Button, ButtonIcon, ButtonUpvote};
