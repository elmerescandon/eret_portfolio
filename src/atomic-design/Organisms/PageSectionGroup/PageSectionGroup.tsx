import React from "react";
import PageSectionGroupDesktop from "./PageSectionGroupDesktop";
import PageSectionGroupTablet from "./PageSectionGroupTablet";
import {navigationSections} from "@/utils/constantsNavigation";
import PageSectionGroupMobile from "./PageSectionGroupMobile";

type PageSectionGroupProps = {
  sections?: string[];
  sectionReferences: React.RefObject<HTMLDivElement | null>[];
  type: "desktop" | "tablet" | "mobile";
};

const PageSectionGroup = ({
  sections = navigationSections,
  sectionReferences,
  type,
}: PageSectionGroupProps) => {
  switch (type) {
    case "desktop":
      return (
        <PageSectionGroupDesktop
          sections={sections}
          sectionReferences={sectionReferences}
        />
      );
    case "tablet":
      return <PageSectionGroupTablet sectionReferences={sectionReferences} />;
    case "mobile":
      return (
        <PageSectionGroupMobile
          sections={sections}
          sectionReferences={sectionReferences}
        />
      );
  }
};

export default PageSectionGroup;
