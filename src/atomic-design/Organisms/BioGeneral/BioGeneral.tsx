import React from "react";
import BioInformation from "../BioInformation/BioInformation";
import {bioContent, bioTechnologies} from "@/utils/constantsBio";
import ProfileImage from "@/atomic-design/Atoms/Images/ProfileImage/ProfileImage";

const BioGeneral = () => {
  return (
    <div className="flex items-center justify-start gap-6 max-w-[744px]">
      <BioInformation content={bioContent} technologies={bioTechnologies} />
      <ProfileImage />
    </div>
  );
};

export default BioGeneral;
