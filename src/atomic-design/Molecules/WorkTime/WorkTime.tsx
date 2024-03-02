import IWorkTime from "@/utils/interfaces/IWorkTime";
import React from "react";

type WorkTimeProps = {
  time: IWorkTime;
};

const WorkTime = ({time}: WorkTimeProps) => {
  const {startDate, endDate, duration} = time;
  return (
    <div className="flex flex-col w-[168px] items-start">
      <p className="font-normal text-base">{`${startDate} - ${endDate}`}</p>
      <p className="font-semibold text-sm text-port-gray">{duration}</p>
    </div>
  );
};

export default WorkTime;
