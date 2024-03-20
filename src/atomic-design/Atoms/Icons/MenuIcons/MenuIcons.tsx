import Image from "next/image";
import React from "react";

type MenuIconsProps = {
  icon: "briefcase" | "terminal" | "user" | "exit";
};

export const MenuIcons = ({icon}: MenuIconsProps) => {
  return (
    <Image
      className="w-8 h-8 text-black"
      src={`/icons/menu/${icon}.svg`}
      alt={icon}
      width={32}
      height={32}
    />
  );
};
