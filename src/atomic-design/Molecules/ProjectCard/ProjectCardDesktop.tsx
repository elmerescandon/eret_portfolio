import ProjectImage from "@/atomic-design/Atoms/Images/ProjectImage/ProjectImage";
import IProject from "@/utils/interfaces/IProject";
import React from "react";
import ProjectTechnologies from "../ProjectTechnologies/ProjectTechnologies";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import Headline from "@/atomic-design/Atoms/Typography/Headline";

type ProjectCardDesktopProps = {
  project: IProject;
};

const ProjectCardDesktop = ({project}: ProjectCardDesktopProps) => {
  const {title, technologies, links, imagePath} = project;
  return (
    <div className="flex gap-6 justify-start items-start w-full">
      <ProjectImage alt={`img-${title}`} src={imagePath} />
      <div className="flex flex-col gap-2 max-w-[552px]">
        <Headline type="large">{title}</Headline>
        <ProjectLinks size="desktop" links={links} />
        <ProjectTechnologies size="small" technologies={technologies} />
      </div>
    </div>
  );
};

export default ProjectCardDesktop;
