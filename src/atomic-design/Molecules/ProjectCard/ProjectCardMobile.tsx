import ProjectImage from "@/atomic-design/Atoms/Images/ProjectImage/ProjectImage";
import IProject from "@/utils/interfaces/IProject";
import React from "react";
import ProjectTechnologies from "../ProjectTechnologies/ProjectTechnologies";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import Headline from "@/atomic-design/Atoms/Typography/Headline";

type ProjectCardMobileProps = {
  project: IProject;
};

const ProjectCardMobile = ({project}: ProjectCardMobileProps) => {
  const {imagePath, title, technologies, links} = project;
  return (
    <div className="flex flex-col gap-4">
      <ProjectImage src={imagePath} alt={`image-${title}`} />
      <Headline type="small">{title}</Headline>
      <ProjectTechnologies size="small" technologies={technologies} />
      <ProjectLinks size="mobile" links={links} />
    </div>
  );
};

export default ProjectCardMobile;
