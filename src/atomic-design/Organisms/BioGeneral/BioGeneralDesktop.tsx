import Headline from "@/atomic-design/Molecules/Headline/Headline";
import BioInformation from "../BioInformation/BioInformation";
import {bioTechnologies} from "@/utils/constantsBio";

const BioGeneralDesktop = () => (
  <div
    className="flex flex-col gap-16 justify-center
        max-w-[744px] h-screen min-h-full"
  >
    <Headline size="desktop" />
    <BioInformation size="desktop" technologies={bioTechnologies} />
  </div>
);
BioGeneralDesktop.displayName = "BioGeneralDesktop";

export default BioGeneralDesktop;
