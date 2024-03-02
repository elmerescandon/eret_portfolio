import IWork from "@/utils/interfaces/IWork";
import React from "react";
import WorkExperienceTime from "../WorkTime/WorkTime";
import ProjectTechnologies from "../ProjectTechnologies/ProjectTechnologies";

type WorkCardProps = {
  workExperience: IWork;
};

const WorkCard = ({workExperience}: WorkCardProps) => {
  const {time, company, position, description, technologies} = workExperience;
  return (
    <div>
      <WorkExperienceTime time={time} />
      <div className="flex flex-col items-start gap-4">
        <p className="text-base font-semibold">{`${position} · ${company} `}</p>
        <p className="text-base font-normal">{description}</p>
        <ProjectTechnologies technologies={technologies} />
      </div>
    </div>
  );
};

export default WorkCard;
