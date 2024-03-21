import React from "react";

type BodyProps = {
  children: React.ReactNode;
  type: "large" | "medium" | "small";
  button?: boolean;
  other?: string;
};

const Body = ({
  children,
  type,
  button = false,
  other = "bg-basic-black",
}: BodyProps) => {
  const classLarge = `text-[16px]  leading-[24px] tracking-[+0.5px] 
    ${button ? "font-semibold" : "font-light"}`;
  const classMedium = `text-[14px] leading-[20px] tracking-[+0.25px] 
    ${button ? "font-semibold" : "font-light"}`;
  const classSmall = `text-[12px] leading-[16px] tracking-[+0.4px] 
    ${button ? "font-semibold" : "font-light"}`;

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

  return <p className={`${className} ${other} max-w-[640px]`}>{children}</p>;
};

export default Body;
