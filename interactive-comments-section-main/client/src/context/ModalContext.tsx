import {createContext} from "react";

export interface ModalContextType {
    isOpen: boolean;
    openModal: (id: string) => void;
    closeModal: () => void;
    targetId: string | null;
}

export const ModalContext = createContext<ModalContextType>(
    {
        isOpen: false,
        openModal: () => {
        },
        closeModal: () => {
        },
        targetId: null,
    }
);

