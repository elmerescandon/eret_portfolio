import PageSection from "@/atomic-design/Molecules/PageSection/PageSection";
import React from "react";

type PageSectionGroupDesktopProps = {
  sections: string[];
  sectionReferences: React.RefObject<HTMLDivElement | null>[];
};

const PageSectionGroupDesktop = ({
  sections,
  sectionReferences,
}: PageSectionGroupDesktopProps) => {
  return (
    <div className="flex flex-col justify-start items-start gap-8">
      {sections.map((section, index) => {
        return (
          <PageSection
            size="big"
            sectionName={section}
            key={index}
            sectionReference={sectionReferences[index]}
          />
        );
      })}
    </div>
  );
};

export default PageSectionGroupDesktop;
