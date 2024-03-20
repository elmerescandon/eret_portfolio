import Headline from "@/atomic-design/Molecules/Headline/Headline";
import React, {forwardRef} from "react";
import BioInformation from "../BioInformation/BioInformation";
import {bioTechnologies} from "@/utils/constantsBio";
import ProfileImage from "@/atomic-design/Atoms/Images/ProfileImage/ProfileImage";

const BioGeneralMobile = () => (
  <div className="flex flex-col gap-4 justify-center items-center">
    <Headline size="mobile" />
    <ProfileImage />
    <BioInformation size="mobile" technologies={bioTechnologies} />
  </div>
);

BioGeneralMobile.displayName = "BioGeneralMobile";

export default BioGeneralMobile;
