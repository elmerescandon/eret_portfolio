import React from "react";

type WorkExperienceTimeProps = {
  startDate: string;
  endDate: string;
  duration: string;
};

const WorkExperienceTime = ({
  startDate,
  endDate,
  duration,
}: WorkExperienceTimeProps) => {
  return (
    <div className="flex flex-col w-[168px] items-start">
      <p className="font-normal text-base">{`${startDate} - ${endDate}`}</p>
      <p className="font-semibold text-sm text-port-gray">{duration}</p>
    </div>
  );
};

export default WorkExperienceTime;
