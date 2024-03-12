import ExternalLink from "@/atomic-design/Atoms/Links/ExternalLink/ExternalLink";
import ProjectCard from "@/atomic-design/Molecules/ProjectCard/ProjectCard";
import webProjects from "@/utils/information/webProjects";
import React, {forwardRef} from "react";

const ProjectExperience = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-start gap-8 
        max-w-[744px] w-full min-h-full h-screen"
    >
      <p className="text-2xl font-bold tracking-wide">Projects</p>
      <div className="flex flex-col gap-6 w-full">
        {webProjects.map((project, index) => {
          return <ProjectCard project={project} key={index} />;
        })}
      </div>
      <ExternalLink href="" title="View all projects" />
    </div>
  );
});

ProjectExperience.displayName = "ProjectExperience";

export default ProjectExperience;
