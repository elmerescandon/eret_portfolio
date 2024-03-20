import Headline from "@/atomic-design/Molecules/Headline/Headline";
import React, {forwardRef} from "react";
import BioInformation from "../BioInformation/BioInformation";
import {bioTechnologies} from "@/utils/constantsBio";

const BioGeneralDesktop = forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div
    ref={ref}
    className="flex flex-col gap-16 justify-center
        max-w-[744px] h-screen min-h-full"
  >
    <Headline size="desktop" />
    <BioInformation size="desktop" technologies={bioTechnologies} />
  </div>
));

BioGeneralDesktop.displayName = "BioGeneralDesktop";

export default BioGeneralDesktop;
