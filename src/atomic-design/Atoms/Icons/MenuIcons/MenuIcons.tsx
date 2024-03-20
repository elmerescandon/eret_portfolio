import {
  BriefcaseIcon,
  CodeBracketSquareIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React from "react";

type MenuIconsProps = {
  icon: "briefcase" | "terminal" | "user";
  other?: string;
};

export const MenuIcons = ({icon, other = "text-black"}: MenuIconsProps) => {
  switch (icon) {
    case "briefcase":
      return (
        <BriefcaseIcon
          className={`w-8 h-8 ${other} stroke-2`}
          width={32}
          height={32}
        />
      );
    case "terminal":
      return (
        <CodeBracketSquareIcon
          className={`w-8 h-8 ${other} stroke-2`}
          width={32}
          height={32}
        />
      );
    case "user":
      return (
        <UserIcon
          className={`w-8 h-8 ${other} stroke-2`}
          width={32}
          height={32}
        />
      );
  }
};
