import TechnologyIcons from "@/atomic-design/Atoms/Icons/TechnologyIcons/TechnologyIcons";
import React from "react";

type ProjectTechnologiesProps = {
  technologies: string[];
  size: "big" | "small";
};

const ProjectTechnologies = ({
  technologies,
  size,
}: ProjectTechnologiesProps) => {
  return (
    <div className="flex pb-2 gap-4 justify-start items-center">
      {technologies.map((technology, index) => (
        <TechnologyIcons key={index} technology={technology} size={size} />
      ))}
    </div>
  );
};

export default ProjectTechnologies;
