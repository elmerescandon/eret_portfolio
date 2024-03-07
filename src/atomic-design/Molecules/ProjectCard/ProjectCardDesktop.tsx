import ProjectImage from "@/atomic-design/Atoms/Images/ProjectImage/ProjectImage";
import IProject from "@/utils/interfaces/IProject";
import React from "react";
import ProjectTechnologies from "../ProjectTechnologies/ProjectTechnologies";
import ProjectLinks from "../ProjectLinks/ProjectLinks";

type ProjectCardDesktopProps = {
  project: IProject;
};

const ProjectCardDesktop = ({project}: ProjectCardDesktopProps) => {
  const {title, technologies, description, links, imagePath} = project;
  return (
    <div className="flex flex-wrap gap-6 justify-start items-start w-full">
      <ProjectImage alt={`img-${title}`} src={imagePath} />
      <div className="flex flex-col gap-2 max-w-[552px]">
        <h1 className="text-2xl font-medium">{title}</h1>
        <p>{description}</p>
        <ProjectLinks links={links} />
        <ProjectTechnologies technologies={technologies} />
      </div>
    </div>
  );
};

export default ProjectCardDesktop;
