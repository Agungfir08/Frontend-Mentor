import {useState} from "react";
import {ModalContext} from "./ModalContext.tsx";

export const ModalProvider = ({children}: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [targetId, setTargetId] = useState<string | null>(null)

    const openModal = (id: string) => {
        setIsOpen(true)
        setTargetId(id)
    }

    const closeModal = () => {
        setIsOpen(false)
        setTargetId(null)
    }

    const value = {
        isOpen,
        targetId,
        openModal,
        closeModal,
    }

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}