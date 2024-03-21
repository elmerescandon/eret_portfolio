import MobileMenuIcons from "@/atomic-design/Atoms/Icons/MobileMenuIcons/MobileMenuIcons";
import React from "react";

type MenuButtonProps = {
  icon: "menu" | "close" | "atom" | "email";
  onClick: () => void;
};

const MenuButton = ({icon, onClick}: MenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-9 h-9 bg-white active:traslate-y-0.5 active:shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-transform duration-300 ease-in-out"
    >
      <MobileMenuIcons icon={icon} />
    </button>
  );
};

export default MenuButton;
