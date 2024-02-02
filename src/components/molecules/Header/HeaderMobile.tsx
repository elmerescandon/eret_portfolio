"use client";
import ButtonContainer from "@/components/atoms/Buttons/ButtonContainer";
import AtomIcon from "@/components/atoms/Icons/AtomIcon";
import FouarBarIcon from "@/components/atoms/Icons/FourBarIcon";
import OpenMailIcon from "@/components/atoms/Icons/OpenMailIcon";

type HeaderMobileTypes = {
    toggleNavBar: () => void;
};

const HeaderMobile = ({ toggleNavBar }: HeaderMobileTypes) => {


    return (
        <div className="hidden max-sm:flex items-center justify-between h-14 px-4 w-screen">
            <ButtonContainer onClick={toggleNavBar}>
                <FouarBarIcon />
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
