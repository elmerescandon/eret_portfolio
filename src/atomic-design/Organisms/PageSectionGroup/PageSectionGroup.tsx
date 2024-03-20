import React from "react";
import PageSectionGroupDesktop from "./PageSectionGroupDesktop";
import PageSectionGroupTablet from "./PageSectionGroupTablet";
import {navigationSections} from "@/utils/constantsNavigation";

type PageSectionGroupProps = {
  sections?: string[];
  sectionReferences: React.RefObject<HTMLDivElement | null>[];
  type: "desktop" | "tablet";
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
  }
};

export default PageSectionGroup;
