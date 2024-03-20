import React, {forwardRef} from "react";
import BioInformation from "../BioInformation/BioInformation";
import {bioContent, bioTechnologies} from "@/utils/constantsBio";
import ProfileImage from "@/atomic-design/Atoms/Images/ProfileImage/ProfileImage";
import Headline from "@/atomic-design/Molecules/Headline/Headline";

const BioGeneral = forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div
    ref={ref}
    className="flex flex-col gap-16 justify-center
      max-w-[744px] h-screen min-h-full"
  >
    <Headline size="desktop" />
    <div className="flex items-center justify-start gap-6">
      <BioInformation content={bioContent} technologies={bioTechnologies} />
      <ProfileImage />
    </div>
  </div>
));

BioGeneral.displayName = "BioGeneral";

export default BioGeneral;
