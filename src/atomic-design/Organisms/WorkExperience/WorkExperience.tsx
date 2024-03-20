import ExternalLink from "@/atomic-design/Atoms/Links/ExternalLink/ExternalLink";
import WorkCard from "@/atomic-design/Molecules/WorkCard/WorkCard";
import workExpreience from "@/utils/information/workExperience";
import React, {forwardRef} from "react";

const WorkExperience = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-start gap-8 
      max-w-[744px]"
    >
      <p className="text-2xl font-bold tracking-wide">Work Experience</p>
      <div className="flex flex-col gap-6">
        {workExpreience.map((work, index) => {
          return <WorkCard size="desktop" workExperience={work} key={index} />;
        })}
      </div>
      <ExternalLink
        href="https://drive.google.com/file/d/1knuHTgCn8n1_Spk7uVWn4oyTv58OouvD/view?usp=sharing"
        title="View Full Resumé"
      />
    </div>
  );
});

WorkExperience.displayName = "WorkExperience";

export default WorkExperience;
