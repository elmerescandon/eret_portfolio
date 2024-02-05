"use client";
import ButtonContainer from "@/components/atoms/Buttons/ButtonContainer";
import AtomIcon from "@/components/atoms/Icons/AtomIcon";
import FourBarIcon from "@/components/atoms/Icons/FourBarIcon";
import OpenMailIcon from "@/components/atoms/Icons/OpenMailIcon";
import { XMarkIcon } from "@heroicons/react/24/outline";

type HeaderMobileTypes = {
    toggleNavBar: () => void;
    navBar: boolean;
};

const HeaderMobile = ({ toggleNavBar, navBar }: HeaderMobileTypes) => {


    return (
        <div className={`hidden h-14 px-4 w-screen items-center justify-between bg-white
                        max-xl:flex`}>
            <ButtonContainer onClick={toggleNavBar}>
                {navBar ? <XMarkIcon className="h-9 font-light" /> : <FourBarIcon />}
            </ButtonContainer>
            <ButtonContainer onClick={() => { }}>
                <AtomIcon />
            </ButtonContainer>
            <ButtonContainer onClick={() => { }}>
                <OpenMailIcon />
            </ButtonContainer>
        </div>
    );
};

export default HeaderMobile;
