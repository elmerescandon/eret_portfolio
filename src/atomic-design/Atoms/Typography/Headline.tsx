import React from "react";

type HeadlineProps = {
  children: React.ReactNode;
  type: "large" | "medium" | "small";
  other?: string;
};

const Headline = ({
  children,
  type,
  other = "bg-basic-black",
}: HeadlineProps) => {
  const classLarge = "text-[32px] font-regular leading-[40px]";
  const classMedium = "text-[28px] font-medium leading-[36px]";
  const classSmall = "text-[24px] font-medium leading-[32px]";

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

export default Headline;
