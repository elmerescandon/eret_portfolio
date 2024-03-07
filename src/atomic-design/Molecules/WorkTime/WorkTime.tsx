import IWorkTime from "@/utils/interfaces/IWorkTime";
import React from "react";

type WorkTimeProps = {
  time: IWorkTime;
};

const WorkTime = ({time}: WorkTimeProps) => {
  const {startDate, endDate, duration} = time;
  return (
    <div className="w-[168px]">
      <p className="font-medium text-base">{`${startDate} - ${endDate}`}</p>
      <p className="font-semibold text-sm text-port-gray italic">{`(${duration})`}</p>
    </div>
  );
};

export default WorkTime;
