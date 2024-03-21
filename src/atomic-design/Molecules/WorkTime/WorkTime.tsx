import React from "react";
import WorkTimeMobile from "./WorkTimeMobile";
import IWorkTime from "@/utils/interfaces/IWorkTime";
import WorkTimeDesktop from "./WorkTimeDesktop";

type WorkTimeProps = {
  time: IWorkTime;
  size: "mobile" | "desktop";
};

const WorkTime = ({time, size}: WorkTimeProps) => {
  if (size === "mobile") {
    return <WorkTimeMobile time={time} />;
  } else {
    return <WorkTimeDesktop time={time} />;
  }
};

export default WorkTime;
