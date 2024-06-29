import {useEffect } from "react";
import style from './Modal.module.css';

export const Modal_S = (
    {
        isOpen, onClose, children
    }: {
        isOpen: boolean,
        onClose: () => void,
        children: React.ReactNode
    }
) => {
    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeydown);
    }, [onClose]);
        if (!isOpen) {
            return null;
        }
        return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300">
            <div className="bg-gray-900 bg-gradient-radial p-5 rounded-md shadow-lg max-w-sm mx-auto transition-opacity duration-300 border-2 border-white ">
            
                {children}
               <button onClick={onClose}>Close</button> 
                <form>
                    <p>Email</p>
                    <input type="text"/>
                    <p>Pseudo</p>
                    <input type="text"/>
                    <p>Password</p>
                    <input type="password" />
                    <p>Confirm Password</p>
                    <input type="password" />
                    <input type="submit" value="Valider"/>
                </form>
            </div>
        </div>);

}