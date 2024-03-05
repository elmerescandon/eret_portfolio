import ExternalLink from "@/atomic-design/Atoms/Links/ExternalLink/ExternalLink";
import WorkCard from "@/atomic-design/Molecules/WorkCard/WorkCard";
import workExpreience from "@/utils/information/workExperience";
import React from "react";

const WorkExperience = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-8 max-w-[744px]">
      <p className="text-2xl font-bold tracking-wide">Work Experience</p>
      <div>
        {workExpreience.map((work, index) => {
          return <WorkCard workExperience={work} key={index} />;
        })}
      </div>
      <ExternalLink href="" title="View Full Resumé" />
    </div>
  );
};

export default WorkExperience;
