import React from "react";

type TitleProps = {
  children: React.ReactNode;
  type: "large" | "medium" | "small";
  bold?: boolean;
  other?: string;
};

const Title = ({
  children,
  type,
  bold = false,
  other = "bg-basic-black",
}: TitleProps) => {
  const classLarge = `text-[22px]  leading-[28px] 
    ${bold ? "font-medium" : "font-regular"}`;
  const classMedium = `text-[16px] leading-[24px] tracking-[+0.15px] 
    ${bold ? "font-semibold" : "font-medium"}`;
  const classSmall = `text-[14px] leading-[20px] tracking-[+0.1px] 
    ${bold ? "font-semibold" : "font-medium"}`;

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

export default Title;
