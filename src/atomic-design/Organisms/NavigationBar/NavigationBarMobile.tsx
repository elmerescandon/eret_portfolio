import MenuButton from "@/atomic-design/Molecules/MenuButton/MenuButton";
import {useRouter} from "next/navigation";
import React from "react";

const NavigationBarMobile = () => {
  const router = useRouter();

  const handleClickEmail = () => {
    router.push("mailto:elmer.escandontufino@gmail.com");
  };

  return (
    <div>
      <div className="absolute z-10 bg-white h-14 px-4 py-3 w-full flex justify-between">
        <MenuButton icon="menu" onClick={() => {}} />
        <MenuButton icon="atom" onClick={() => {}} />
        <MenuButton icon="email" onClick={handleClickEmail} />
      </div>
    </div>
  );
};

export default NavigationBarMobile;
