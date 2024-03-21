import IWork from "@/utils/interfaces/IWork";
import React from "react";
import WorkTime from "../WorkTime/WorkTime";
import ProjectTechnologies from "../ProjectTechnologies/ProjectTechnologies";
import Title from "@/atomic-design/Atoms/Typography/Title";
import Body from "@/atomic-design/Atoms/Typography/Body";

type WorkCarDesktopProps = {
  workExperience: IWork;
};

const WorkCardDesktop = ({workExperience}: WorkCarDesktopProps) => {
  const {time, company, position, description, technologies} = workExperience;
  return (
    <div className="flex gap-6 justify-between w-full">
      <WorkTime time={time} size="desktop" />
      <div className="flex flex-col items-start gap-4 w-full">
        <Title type="large">{`${position} · ${company} `}</Title>
        <Body type="large">{description}</Body>
        <ProjectTechnologies technologies={technologies} size="big" />
      </div>
    </div>
  );
};

export default WorkCardDesktop;
