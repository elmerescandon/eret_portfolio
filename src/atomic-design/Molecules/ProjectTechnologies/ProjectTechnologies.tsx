import {imageTechnologies} from "@/utils/constants";
import {title} from "process";
import React from "react";

type ProjectTechnologiesProps = {
  technologies: string[];
};

const ProjectTechnologies = ({technologies}: ProjectTechnologiesProps) => {
  return (
    <div className="flex pb-2 gap-4 justify-start items-center">
      {technologies.map((technology, index) => (
        <img
          key={index}
          className="w-8 h-8"
          src={imageTechnologies[technology as keyof typeof imageTechnologies]}
          alt={technology}
          title={technology}
        />
      ))}
    </div>
  );
};

export default ProjectTechnologies;
