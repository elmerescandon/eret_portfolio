import React from "react";
import PageSectionGroup from "../PageSectionGroup/PageSectionGroup";
import CTALinkGroup from "../CTALinkGroup/CTALinkGroup";
import {callToActionArray} from "@/utils/constantsNavigation";

type NavigationBarTabletProps = {
  sectionReferences: React.RefObject<HTMLDivElement | null>[];
};

const NavigationBarTablet = ({sectionReferences}: NavigationBarTabletProps) => {
  return (
    <div className="fixed left-0 z-10 bg-white flex flex-col py-16 justify-between items-center w-[72px] h-screen">
      <PageSectionGroup type="tablet" sectionReferences={sectionReferences} />
      <CTALinkGroup callToActionArray={callToActionArray} size="tablet" />
    </div>
  );
};

export default NavigationBarTablet;
