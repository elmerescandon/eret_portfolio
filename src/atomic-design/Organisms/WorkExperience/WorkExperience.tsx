import React, {forwardRef} from "react";
import WorkExperienceDesktop from "./WorkExperienceDesktop";
import WorkExperienceMobile from "./WorkExperienceMobile";

const WorkExperience = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref}>
      <div className="hidden min-[600px]:block">
        <WorkExperienceDesktop />
      </div>
      <div className="hidden max-[600px]:block">
        <WorkExperienceMobile />
      </div>
    </div>
  );
});

WorkExperience.displayName = "WorkExperience";

export default WorkExperience;
