import React from "react";
import PageSectionGroup from "../PageSectionGroup/PageSectionGroup";
import Pronouns from "@/atomic-design/Molecules/Pronouns/Pronouns";
import CTALinkGroup from "../CTALinkGroup/CTALinkGroup";
import {
  callToActionArray,
  navigationSections,
} from "@/utils/constantsNavigation";

const NavigationBarDesktop = () => {
  return (
    <div className="py-8 flex flex-col gap-8 justify-start">
      <PageSectionGroup sections={navigationSections} />
      <Pronouns />
      <CTALinkGroup callToActionArray={callToActionArray} />
    </div>
  );
};

export default NavigationBarDesktop;
