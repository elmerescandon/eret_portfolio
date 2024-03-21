import React from "react";

type DisplayProps = {
  children: React.ReactNode;
  type: "large" | "medium" | "small";
  other?: string;
};

const Display = ({children, type, other = "bg-basic-black"}: DisplayProps) => {
  const classLarge =
    "text-[57px] font-regular leading-[64px] tracking-[-0.25px]";
  const classMedium = "text-[45px] font-medium leading-[52px]";
  const classSmall = "text-[36px] font-medium leading-[44px]";

  let className;
  switch (type) {
    case "large":
      className = classLarge;
      break;
    case "medium":
      className = classMedium;
      break;
    case "small":
      className = classSmall;
      break;
    default:
      className = "";
  }

  return <p className={`${className} ${other}`}>{children}</p>;
};

export default Display;
