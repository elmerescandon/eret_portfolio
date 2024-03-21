import React from "react";
import IProject from "@/utils/interfaces/IProject";
import ProjectCardDesktop from "./ProjectCardDesktop";
import ProjectCardMobile from "./ProjectCardMobile";

type ProjectCardProps = {
  project: IProject;
  size: "desktop" | "mobile";
};

const ProjectCard = ({project, size}: ProjectCardProps) => {
  switch (size) {
    case "desktop":
      return <ProjectCardDesktop project={project} />;
    case "mobile":
      return <ProjectCardMobile project={project} />;
  }
};

export default ProjectCard;
