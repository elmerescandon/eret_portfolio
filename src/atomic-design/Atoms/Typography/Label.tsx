import React from "react";

type LabelProps = {
  children: React.ReactNode;
  type: "large" | "medium" | "small";
  italicUnderline?: boolean;
  other?: string;
};

const Label = ({
  children,
  type,
  italicUnderline = false,
  other = "bg-basic-black",
}: LabelProps) => {
  const classLarge = `text-[14px]  leading-[20px] tracking-[+0.1px] font-medium
    ${italicUnderline ? "italic underline" : ""}`;
  const classMedium = `text-[12px] leading-[16px] tracking-[+0.5px] font-medium
    ${italicUnderline ? "italic underline" : ""}`;
  const classSmall = `text-[11px] leading-[16px] tracking-[+0.5px] font-medium
    ${italicUnderline ? "italic underline" : ""}`;

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

export default Label;
