import React from "react";
import ITechnologiesLabel from "@/utils/interfaces/ITechnologies";
import BioInformationDesktop from "./BioInformationDesktop";
import BioInformationTablet from "./BioInformationTablet";
import BioinformationMobile from "./BioInformationMobile";

type BioInformationProps = {
  technologies: ITechnologiesLabel[];
  size: "desktop" | "mobile" | "tablet";
};

const BioInformation = ({technologies, size}: BioInformationProps) => {
  switch (size) {
    case "desktop":
      return <BioInformationDesktop technologies={technologies} />;
    case "tablet":
      return <BioInformationTablet technologies={technologies} />;
    case "mobile":
      return <BioinformationMobile technologies={technologies} />;
  }
};

export default BioInformation;
