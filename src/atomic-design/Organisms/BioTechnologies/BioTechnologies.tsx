import TechnologyLabel from "@/atomic-design/Molecules/TechnologyLabel/TechnologyLabel";
import ITechnologiesLabel from "@/utils/interfaces/ITechnologies";
import React from "react";

type BioTechnologiesProps = {
  technologies: ITechnologiesLabel[];
};
const BioTechnologies = ({technologies}: BioTechnologiesProps) => {
  return (
    <div>
      <p className="py-4 text-base font-normal">
        Some of the technologies I've work recently:
      </p>
      <div className="grid grid-cols-3 gap-2">
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
    </div>
  );
};

export default BioTechnologies;
