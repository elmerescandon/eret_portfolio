import Headline from "@/atomic-design/Molecules/Headline/Headline";
import BioInformation from "../BioInformation/BioInformation";
import {bioTechnologies} from "@/utils/constantsBio";

const BioGeneralDesktop = () => (
  <div
    className="flex flex-col gap-16 justify-center min-h-full
        w-full max-w-[880px] 
        min-[1440px]:h-screen 
        max-[905px]:max-w-[756px]
        max-[600px]:max-w-[480px]
        "
  >
    <Headline size="desktop" />
    <BioInformation size="desktop" technologies={bioTechnologies} />
  </div>
);
BioGeneralDesktop.displayName = "BioGeneralDesktop";

export default BioGeneralDesktop;
