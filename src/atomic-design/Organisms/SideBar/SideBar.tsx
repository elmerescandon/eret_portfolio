import Pronouns from "@/atomic-design/Molecules/Pronouns/Pronouns";
import {Transition} from "@headlessui/react";
import React from "react";
import PageSectionGroup from "../PageSectionGroup/PageSectionGroup";
import CTALinkGroup from "../CTALinkGroup/CTALinkGroup";
import {callToActionArray} from "@/utils/constantsNavigation";

type MobileMenuProps = {
  isOpen: boolean;
  sectionReferences: React.RefObject<HTMLDivElement | null>[];
};

const SideBar = ({isOpen, sectionReferences}: MobileMenuProps) => {
  return (
    <Transition
      show={isOpen}
      enter="transition-transform transform duration-300 ease-out"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition-transform transform duration-300 ease-out"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
      className={`fixed top-0 left-0 w-2/3 h-full bg-white z-10 pl-4 `}
    >
      <div className="w-full flex flex-col pr-4 gap-8 pt-20">
        <PageSectionGroup type="mobile" sectionReferences={sectionReferences} />
        <Pronouns />
        <CTALinkGroup size="desktop" callToActionArray={callToActionArray} />
      </div>
    </Transition>
  );
};

export default SideBar;
