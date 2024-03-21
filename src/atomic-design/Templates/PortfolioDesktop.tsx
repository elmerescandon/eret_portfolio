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
    <div className="relative w-full h-full">
      <NavigationBar
        sectionReferences={[viewAbout, viewExperience, viewProjects]}
      />
      <div
        className="flex flex-col items-center gap-16
        max-[1600px]:pl-32 
        max-[1280px]:px-[117px]
        max-[905px]:pr-8
        max-[600px]:pl-[88px]
        max-[360px]:px-4"
      >
        <BioGeneral ref={viewAbout} />
        <WorkExperience ref={viewExperience} />
        {/* <ProjectExperience ref={viewProjects} /> */}
      </div>
    </div>
  );
};

export default PortfolioDesktop;
