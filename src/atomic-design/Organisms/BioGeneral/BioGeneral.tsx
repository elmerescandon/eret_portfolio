import React, {forwardRef} from "react";
import BioGeneralTablet from "./BioGeneralTablet";
import BioGeneralDesktop from "./BioGeneralDesktop";
import BioGeneralMobile from "./BioGeneralMobile";

const BioGeneral = forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div>
    <div className="hidden min-[600px]:block">
      <BioGeneralDesktop ref={ref} />
    </div>
    <div className="max-[600px]:block max-[360px]:hidden hidden">
      <BioGeneralTablet ref={ref} />
    </div>
    <div className="max-[360px]:block hidden">
      <BioGeneralMobile ref={ref} />
    </div>
  </div>
));

BioGeneral.displayName = "BioGeneral";

export default BioGeneral;
