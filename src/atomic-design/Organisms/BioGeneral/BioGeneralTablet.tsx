import Headline from "@/atomic-design/Molecules/Headline/Headline";
import React, {forwardRef} from "react";
import BioInformation from "../BioInformation/BioInformation";
import {bioTechnologies} from "@/utils/constantsBio";
import ProfileImage from "@/atomic-design/Atoms/Images/ProfileImage/ProfileImage";

const BioGeneralTablet = forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div
    ref={ref}
    className=" px-8 flex flex-col gap-4 justify-center items-center"
  >
    <Headline size="mobile" />
    <ProfileImage />
    <BioInformation size="tablet" technologies={bioTechnologies} />
  </div>
));

BioGeneralTablet.displayName = "BioGeneralTablet";

export default BioGeneralTablet;
