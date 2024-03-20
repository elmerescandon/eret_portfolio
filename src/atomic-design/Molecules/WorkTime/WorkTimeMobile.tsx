import Label from "@/atomic-design/Atoms/Typography/Label";
import IWorkTime from "@/utils/interfaces/IWorkTime";
import React from "react";

type WorkTimeMobileProps = {
  time: IWorkTime;
};

const WorkTimeMobile = ({time}: WorkTimeMobileProps) => {
  const {startDate, endDate, duration} = time;
  return (
    <div className="flex gap-2 items-center ">
      <Label type="small">{`${startDate} - ${endDate}`}</Label>
      <Label italicUnderline type="large">{`(${duration})`}</Label>
    </div>
  );
};

export default WorkTimeMobile;
