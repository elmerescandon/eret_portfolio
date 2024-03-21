import Headline from "@/atomic-design/Molecules/Headline/Headline";
import React, {forwardRef} from "react";
import BioInformation from "../BioInformation/BioInformation";
import {bioTechnologies} from "@/utils/constantsBio";
import ProfileImage from "@/atomic-design/Atoms/Images/ProfileImage/ProfileImage";

const BioGeneralTablet = () => (
  <div className="flex flex-col gap-4 justify-center items-center w-full">
    <Headline size="mobile" />
    <ProfileImage />
    <BioInformation size="tablet" technologies={bioTechnologies} />
  </div>
);

BioGeneralTablet.displayName = "BioGeneralTablet";

export default BioGeneralTablet;
