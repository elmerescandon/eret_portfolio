import React, {forwardRef} from "react";
import WorkExperienceDesktop from "./WorkExperienceDesktop";
import WorkExperienceMobile from "./WorkExperienceMobile";

const WorkExperience = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className="flex-grow">
      <div className="hidden min-[905px]:block">
        <WorkExperienceDesktop />
      </div>
      <div className="hidden max-[905px]:block">
        <WorkExperienceMobile />
      </div>
    </div>
  );
});

WorkExperience.displayName = "WorkExperience";

export default WorkExperience;
