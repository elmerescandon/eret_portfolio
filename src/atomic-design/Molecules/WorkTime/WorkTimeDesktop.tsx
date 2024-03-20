import Label from "@/atomic-design/Atoms/Typography/Label";
import IWorkTime from "@/utils/interfaces/IWorkTime";
import React from "react";

type WorkTimeDesktopProps = {
  time: IWorkTime;
};

const WorkTimeDesktop = ({time}: WorkTimeDesktopProps) => {
  const {startDate, endDate, duration} = time;
  return (
    <div className="w-[168px] flex flex-col">
      <Label type="large">{`${startDate} - ${endDate}`}</Label>
      <Label italicUnderline type="large">{`(${duration})`}</Label>
    </div>
  );
};

export default WorkTimeDesktop;
