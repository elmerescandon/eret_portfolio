import ExternalLink from "@/atomic-design/Atoms/Links/ExternalLink/ExternalLink";
import Headline from "@/atomic-design/Atoms/Typography/Headline";
import ProjectCard from "@/atomic-design/Molecules/ProjectCard/ProjectCard";
import webProjects from "@/utils/information/webProjects";
import React from "react";

const ProjectExperienceDesktop = () => {
  return (
    <div
      className="flex flex-col justify-end items-start gap-8  w-full
        min-[1140px]:max-w-[880px]
        min-[905px]:max-w-[756px]
        min-[600px]:max-w-[480px]
        "
    >
      <Headline type="large">Projects</Headline>
      <div className="flex flex-col gap-16 w-full justify-start items-start">
        {webProjects.map((project, index) => {
          return <ProjectCard size="desktop" project={project} key={index} />;
        })}
      </div>
      <ExternalLink href="" title="View all projects" />
    </div>
  );
};

export default ProjectExperienceDesktop;
