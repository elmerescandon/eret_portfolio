import React, {forwardRef} from "react";
import BioGeneralTablet from "./BioGeneralTablet";
import BioGeneralDesktop from "./BioGeneralDesktop";
import BioGeneralMobile from "./BioGeneralMobile";

const BioGeneral = forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div ref={ref} className="self-center">
    <div className="hidden min-[905px]:block">
      <BioGeneralDesktop />
    </div>
    <div className="max-[905px]:block max-[360px]:hidden hidden">
      <BioGeneralTablet />
    </div>
    <div className="max-[360px]:block hidden">
      <BioGeneralMobile />
    </div>
  </div>
));

BioGeneral.displayName = "BioGeneral";

export default BioGeneral;
