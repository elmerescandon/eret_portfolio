import React from "react";
import BioGeneral from "../Organisms/BioGeneral/BioGeneral";
import WorkExperience from "../Organisms/WorkExperience/WorkExperience";
import ProjectExperience from "../Organisms/ProjectExperience/ProjectExperience";
import NavigationBarDesktop from "../Organisms/NavigationBar/NavigationBarDesktop";

const PortfolioDesktop = () => {
  return (
    <div className="relative">
      <NavigationBarDesktop />
      <div className="w-screen flex flex-col items-center">
        <BioGeneral />
        <WorkExperience />
        <ProjectExperience />
      </div>
    </div>
  );
};

export default PortfolioDesktop;
