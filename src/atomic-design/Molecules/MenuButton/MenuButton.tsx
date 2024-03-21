import MobileMenuIcons from "@/atomic-design/Atoms/Icons/MobileMenuIcons/MobileMenuIcons";
import React from "react";

type MenuButtonProps = {
  icon: "menu" | "close" | "atom" | "email";
  onClick: () => void;
};

const MenuButton = ({icon, onClick}: MenuButtonProps) => {
  return (
    <button onClick={onClick} className="w-9 h-9 bg-white">
      <MobileMenuIcons icon="menu" />
    </button>
  );
};

export default MenuButton;
