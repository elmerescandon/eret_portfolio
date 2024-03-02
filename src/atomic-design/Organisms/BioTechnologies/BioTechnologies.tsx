import TechnologyLabel from "@/atomic-design/Molecules/TechnologyLabel/TechnologyLabel";
import ITechnologiesLabel from "@/utils/interfaces/ITechnologies";
import React from "react";

type BioTechnologiesProps = {
  technologies: ITechnologiesLabel[];
};
const BioTechnologies = ({technologies}: BioTechnologiesProps) => {
  return (
    <div className="flex flex-wrap gap-4 justify-between">
      {technologies.map((item, index) => {
        return (
          <TechnologyLabel
            key={index}
            technology={item.technology}
            technologyTitle={item.technologyTitle}
          />
        );
      })}
    </div>
  );
};

export default BioTechnologies;
