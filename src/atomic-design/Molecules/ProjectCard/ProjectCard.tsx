import React from "react";
import IProject from "@/utils/interfaces/IProject";
import ProjectCardDesktop from "./ProjectCardDesktop";

type ProjectCardProps = {
  project: IProject;
};

const ProjectCard = ({project}: ProjectCardProps) => {
  return (
    <div className="w-full">
      <div className="w-full">
        <ProjectCardDesktop project={project} />
      </div>
    </div>
  );
};

export default ProjectCard;
