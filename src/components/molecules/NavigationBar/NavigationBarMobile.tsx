import React from 'react';
import { Transition } from '@headlessui/react';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    return (
        <Transition
            show={isOpen}
            enter="transition-transform transform duration-300 ease-out"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform transform duration-300 ease-out"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            className={`fixed top-0 left-0 w-2/3 h-full bg-gray-800 z-50`}
        >
            <div className='flex justify-end bg-gray-800 w-full'>
            </div>
        </Transition>
    );
};

export default MobileMenu;
