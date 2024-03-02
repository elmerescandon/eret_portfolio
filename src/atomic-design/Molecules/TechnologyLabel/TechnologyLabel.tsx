import TechnologyIcons from "@/atomic-design/Atoms/Icons/TechnologyIcons/TechnologyIcons";
import React from "react";

type TechnologyLabelProps = {
  technology: string;
  technologyTitle: string;
};

const TechnologyLabel = ({
  technology,
  technologyTitle,
}: TechnologyLabelProps) => {
  return (
    <div className="flex gap-2 items-center">
      <TechnologyIcons technology={technology} />
      <p className="text-base font-bold">{technologyTitle}</p>
    </div>
  );
};

export default TechnologyLabel;
