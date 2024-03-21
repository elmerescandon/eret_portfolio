import IWork from "@/utils/interfaces/IWork";
import WorkCardDesktop from "./WorkCardDesktop";
import WorkCardMobile from "./WorkCardMobile";

type WorkCardProps = {
  workExperience: IWork;
  size: "desktop" | "mobile";
};

const WorkCard = ({workExperience, size}: WorkCardProps) => {
  switch (size) {
    case "desktop":
      return <WorkCardDesktop workExperience={workExperience} />;
    case "mobile":
      return <WorkCardMobile workExperience={workExperience} />;
  }
};

export default WorkCard;
