"use client";
import React, {useRef, useState} from "react";
import BioGeneral from "../Organisms/BioGeneral/BioGeneral";
import WorkExperience from "../Organisms/WorkExperience/WorkExperience";
import ProjectExperience from "../Organisms/ProjectExperience/ProjectExperience";
import NavigationBar from "../Organisms/NavigationBar/NavigationBar";
import SideBar from "../Organisms/SideBar/SideBar";

const PortfolioDesktop = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const viewAbout = useRef<HTMLDivElement | null>(null);
  const viewExperience = useRef<HTMLDivElement | null>(null);
  const viewProjects = useRef<HTMLDivElement | null>(null);
  return (
    <div className="relative w-full h-full">
      <SideBar
        isOpen={openMenu}
        sectionReferences={[viewAbout, viewExperience, viewProjects]}
      />
      <div>
        <NavigationBar
          sectionReferences={[viewAbout, viewExperience, viewProjects]}
          handleOpenMenu={() => setOpenMenu(!openMenu)}
          openMenu={openMenu}
        />
        <div
          className="flex flex-col gap-16 w-full items-center 
        
        max-[1600px]:pl-32 
        max-[1280px]:px-[117px]
        max-[905px]:pr-8
        max-[600px]:pl-[88px]
        max-[360px]:px-4 max-[360px]:pt-20"
        >
          <BioGeneral ref={viewAbout} />
          <WorkExperience ref={viewExperience} />
          <ProjectExperience ref={viewProjects} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioDesktop;
