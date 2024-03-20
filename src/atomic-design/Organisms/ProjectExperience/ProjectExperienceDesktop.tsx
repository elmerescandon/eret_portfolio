import ExternalLink from "@/atomic-design/Atoms/Links/ExternalLink/ExternalLink";
import Headline from "@/atomic-design/Atoms/Typography/Headline";
import ProjectCard from "@/atomic-design/Molecules/ProjectCard/ProjectCard";
import webProjects from "@/utils/information/webProjects";
import React from "react";

const ProjectExperienceDesktop = () => {
  return (
    <div
      className="flex flex-col justify-center items-start gap-8 
        max-w-[744px] w-full"
    >
      <Headline type="large">Projects</Headline>
      <div className="flex flex-col gap-6 w-full">
        {webProjects.map((project, index) => {
          return <ProjectCard size="desktop" project={project} key={index} />;
        })}
      </div>
      <ExternalLink href="" title="View all projects" />
    </div>
  );
};

export default ProjectExperienceDesktop;
