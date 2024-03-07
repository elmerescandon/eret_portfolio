import React from "react";
import {Transition} from "@headlessui/react";
import SectionsBar from "@/components/molecules/SectionsBar/SectionsBar";
import ReferenceLinks from "@/components/molecules/ReferenceLinks/ReferenceLinks";
import Pronouns from "@/atomic-design/Molecules/Pronouns/Pronouns";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({isOpen, onClose}) => {
  return (
    <Transition
      show={isOpen}
      enter="transition-transform transform duration-300 ease-out"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition-transform transform duration-300 ease-out"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
      className={`fixed top-0 left-0 w-2/3 h-full bg-white z-50 pl-4`}
    >
      <div className="w-full">
        <SectionsBar />
        <Pronouns />
        <ReferenceLinks />
      </div>
    </Transition>
  );
};

export default MobileMenu;
