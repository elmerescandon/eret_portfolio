import Image from "next/image";
import React from "react";

type MobileMenuIconsProps = {
  icon: "menu" | "close" | "atom" | "email";
};

const MobileMenuIcons = ({icon}: MobileMenuIconsProps) => {
  return (
    <Image
      className="w-9 h-9 text-black"
      src={`/icons/menu/mobile/${icon}.svg`}
      alt={icon}
      width={36}
      height={36}
    />
  );
};

export default MobileMenuIcons;
