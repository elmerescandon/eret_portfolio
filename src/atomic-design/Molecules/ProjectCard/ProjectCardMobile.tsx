import ProjectImage from "@/atomic-design/Atoms/Images/ProjectImage/ProjectImage";
import IProject from "@/utils/interfaces/IProject";
import React from "react";
import ProjectTechnologies from "../ProjectTechnologies/ProjectTechnologies";
import ProjectLinks from "../ProjectLinks/ProjectLinks";

type ProjectCardMobileProps = {
  project: IProject;
};

const ProjectCardMobile = ({project}: ProjectCardMobileProps) => {
  const {imagePath, title, technologies, description, links} = project;
  return (
    <div>
      <ProjectImage src={imagePath} alt={`image-${title}`} />
      <ProjectTechnologies technologies={technologies} />
      <h1>{title}</h1>
      <p>{description}</p>
      <ProjectLinks links={links} />
    </div>
  );
};

export default ProjectCardMobile;
