import React from "react";
import PageSectionGroup from "../PageSectionGroup/PageSectionGroup";
import Pronouns from "@/atomic-design/Molecules/Pronouns/Pronouns";
import CTALinkGroup from "../CTALinkGroup/CTALinkGroup";
import {
  callToActionArray,
  navigationSections,
} from "@/utils/constantsNavigation";

type NavigationBarDesktopProps = {
  sectionReferences: React.RefObject<HTMLDivElement | null>[];
};

const NavigationBarDesktop = ({
  sectionReferences,
}: NavigationBarDesktopProps) => {
  return (
    <div className="fixed left-0 top-1/3 px-8 flex flex-col gap-8 justify-start w-[320px]  ">
      <PageSectionGroup
        sections={navigationSections}
        sectionReferences={sectionReferences}
      />
      <Pronouns />
      <CTALinkGroup callToActionArray={callToActionArray} />
    </div>
  );
};

export default NavigationBarDesktop;
