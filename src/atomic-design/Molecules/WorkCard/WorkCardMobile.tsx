import IWork from "@/utils/interfaces/IWork";
import React from "react";
import WorkTime from "../WorkTime/WorkTime";
import Title from "@/atomic-design/Atoms/Typography/Title";
import Body from "@/atomic-design/Atoms/Typography/Body";
import ProjectTechnologies from "../ProjectTechnologies/ProjectTechnologies";

type WorkCardMobile = {
  workExperience: IWork;
};

const WorkCardMobile = ({workExperience}: WorkCardMobile) => {
  const {time, company, position, description, technologies} = workExperience;
  return (
    <div className="w-full flex flex-col gap-2 ">
      <WorkTime time={time} size="mobile" />
      <div className="flex flex-col items-start gap-4 w-full">
        <Title type="small">{`${position} · ${company} `}</Title>
        <Body type="small">{description}</Body>
        <ProjectTechnologies technologies={technologies} size="small" />
      </div>
    </div>
  );
};
export default WorkCardMobile;
