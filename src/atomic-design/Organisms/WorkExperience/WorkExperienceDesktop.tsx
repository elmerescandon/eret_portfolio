import ExternalLink from "@/atomic-design/Atoms/Links/ExternalLink/ExternalLink";
import Headline from "@/atomic-design/Atoms/Typography/Headline";
import WorkCard from "@/atomic-design/Molecules/WorkCard/WorkCard";
import workExpreience from "@/utils/information/workExperience";
import React from "react";

const WorkExperienceDesktop = () => {
  return (
    <div
      className="flex flex-col justify-center items-start gap-8 w-full 
      max-w-[880px] 
      max-[905px]:max-w-[756px]
      max-[600px]:max-w-[480px]
    "
    >
      <Headline type="large">Work Experience</Headline>
      <div className="flex flex-col flex-wrap gap-6">
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
};

export default WorkExperienceDesktop;
