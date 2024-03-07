import React from "react";
import IProject from "@/utils/interfaces/IProject";
import ProjectCardDesktop from "./ProjectCardDesktop";

type ProjectCardProps = {
  project: IProject;
};

const ProjectCard = ({project}: ProjectCardProps) => {
  return (
    <div>
      <div>
        <ProjectCardDesktop project={project} />
      </div>
    </div>
  );
};

export default ProjectCard;
