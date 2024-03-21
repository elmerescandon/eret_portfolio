import TechnologyLabel from "@/atomic-design/Molecules/TechnologyLabel/TechnologyLabel";
import ITechnologiesLabel from "@/utils/interfaces/ITechnologies";
import React from "react";

type BioTechnologiesProps = {
  technologies: ITechnologiesLabel[];
  size: "big" | "small";
};
const BioTechnologies = ({technologies, size}: BioTechnologiesProps) => {
  return (
    <div>
      <p className="py-4 text-base font-normal">
        Some of the technologies I have been working recently:
      </p>
      <div
        className="grid grid-cols-3 gap-2 
        max-[460px]:flex max-[460px]:gap-4 max-[460px]:flex-wrap
        max-[460px]:justify-around
        "
      >
        {technologies.map((item, index) => {
          return (
            <TechnologyLabel
              size={size}
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
