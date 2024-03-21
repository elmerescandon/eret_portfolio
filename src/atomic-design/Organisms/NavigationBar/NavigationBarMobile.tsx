import MenuButton from "@/atomic-design/Molecules/MenuButton/MenuButton";
import Pronouns from "@/atomic-design/Molecules/Pronouns/Pronouns";
import {useRouter} from "next/navigation";
import React, {useState} from "react";
import CTALinkGroup from "../CTALinkGroup/CTALinkGroup";
import {callToActionArray} from "@/utils/constantsNavigation";

type NavigationBarMobileProps = {
  handleOpenMenu: () => void;
  openMenu?: boolean;
};

const NavigationBarMobile = ({
  handleOpenMenu,
  openMenu,
}: NavigationBarMobileProps) => {
  const router = useRouter();

  const handleClickEmail = () => {
    router.push("mailto:elmer.escandontufino@gmail.com");
  };

  return (
    <div className="fixed z-10 bg-white h-14 px-4 py-3 w-full flex justify-between">
      <MenuButton
        icon={`${openMenu ? "close" : "menu"}`}
        onClick={handleOpenMenu}
      />
      <MenuButton icon="atom" onClick={() => {}} />
      <MenuButton icon="email" onClick={handleClickEmail} />
    </div>
  );
};

export default NavigationBarMobile;
