import TechnologyIcons from "@/atomic-design/Atoms/Icons/TechnologyIcons/TechnologyIcons";
import Body from "@/atomic-design/Atoms/Typography/Body";
import React from "react";

type TechnologyLabelProps = {
  technology: string;
  technologyTitle: string;
  size: "big" | "small";
};

const TechnologyLabel = ({
  technology,
  technologyTitle,
  size,
}: TechnologyLabelProps) => {
  return (
    <div className="flex gap-2 items-center">
      <TechnologyIcons technology={technology} size={size} />
      <Body type={size === "big" ? "large" : "small"}>{technologyTitle}</Body>
    </div>
  );
};

export default TechnologyLabel;
