import ExternalLink from "@/atomic-design/Atoms/Links/ExternalLink/ExternalLink";
import ProjectCard from "@/atomic-design/Molecules/ProjectCard/ProjectCard";
import webProjects from "@/utils/information/webProjects";
import React from "react";

const ProjectExperience = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-8 max-w-[744px] w-full h-screen">
      <p className="text-2xl font-bold tracking-wide">Projects</p>
      <div className="flex flex-col gap-6">
        {webProjects.map((project, index) => {
          return <ProjectCard project={project} key={index} />;
        })}
      </div>
      <ExternalLink href="" title="View all projects" />
    </div>
  );
};

export default ProjectExperience;
