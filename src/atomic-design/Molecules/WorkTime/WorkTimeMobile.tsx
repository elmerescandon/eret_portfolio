import Label from "@/atomic-design/Atoms/Typography/Label";
import IWorkTime from "@/utils/interfaces/IWorkTime";
import React from "react";

type WorkTimeMobileProps = {
  time: IWorkTime;
};

const WorkTimeMobile = ({time}: WorkTimeMobileProps) => {
  const {startDate, endDate, duration} = time;
  return (
    <div className="flex gap-2 items-center w-full">
      <Label type="medium">{`${startDate} - ${endDate}`}</Label>
      <Label italicUnderline type="medium">{`(${duration})`}</Label>
    </div>
  );
};

export default WorkTimeMobile;
