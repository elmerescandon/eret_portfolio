import PageSection from "@/atomic-design/Molecules/PageSection/PageSection";
import React from "react";

type PageSectionGroupMobileProps = {
  sections: string[];
  sectionReferences: React.RefObject<HTMLDivElement | null>[];
};

const PageSectionGroupMobile = ({
  sections,
  sectionReferences,
}: PageSectionGroupMobileProps) => {
  return (
    <div className="flex flex-col justify-start items-start gap-8">
      {sections.map((section, index) => {
        return (
          <PageSection
            size="small"
            sectionName={section}
            key={index}
            sectionReference={sectionReferences[index]}
          />
        );
      })}
    </div>
  );
};

export default PageSectionGroupMobile;
