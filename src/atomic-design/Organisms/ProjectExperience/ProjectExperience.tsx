import React, {forwardRef} from "react";
import ProjectExperienceMobile from "./ProjectExperienceMobile";
import ProjectExperienceDesktop from "./ProjectExperienceDesktop";
import "./ProjectExperience.scss";

const ProjectExperience = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className="project-experience">
      <div className="hidden min-[600px]:block">
        <ProjectExperienceDesktop />
      </div>
      <div className="hidden max-[600px]:block">
        <ProjectExperienceMobile />
      </div>
    </div>
  );
});

ProjectExperience.displayName = "ProjectExperience";

export default ProjectExperience;
