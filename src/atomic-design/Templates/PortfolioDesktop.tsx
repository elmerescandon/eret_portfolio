"use client";
import React, {useRef} from "react";
import BioGeneral from "../Organisms/BioGeneral/BioGeneral";
import WorkExperience from "../Organisms/WorkExperience/WorkExperience";
import ProjectExperience from "../Organisms/ProjectExperience/ProjectExperience";
import NavigationBar from "../Organisms/NavigationBar/NavigationBar";

const PortfolioDesktop = () => {
  const viewAbout = useRef<HTMLDivElement | null>(null);
  const viewExperience = useRef<HTMLDivElement | null>(null);
  const viewProjects = useRef<HTMLDivElement | null>(null);
  return (
    <div className="relative">
      <NavigationBar
        sectionReferences={[viewAbout, viewExperience, viewProjects]}
      />
      <div
        className="w-screen flex flex-col items-center 
        gap-16
        max-2xl:pl-80
        max-xl:pl-0"
      >
        <BioGeneral ref={viewAbout} />
        <WorkExperience ref={viewExperience} />
        <ProjectExperience ref={viewProjects} />
      </div>
    </div>
  );
};

export default PortfolioDesktop;
