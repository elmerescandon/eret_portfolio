import React from "react";
import BioInformation from "../BioInformation/BioInformation";
import {bioContent, bioTechnologies} from "@/utils/constantsBio";
import ProfileImage from "@/atomic-design/Atoms/Images/ProfileImage/ProfileImage";
import HeadlineDesktop from "@/atomic-design/Molecules/Headline/HeadlineDesktop";

const BioGeneral = () => {
  return (
    <div className="flex flex-col gap-16 max-w-[744px] h-screen justify-center">
      <HeadlineDesktop />
      <div className="flex items-center justify-start gap-6">
        <BioInformation content={bioContent} technologies={bioTechnologies} />
        <ProfileImage />
      </div>
    </div>
  );
};

export default BioGeneral;
