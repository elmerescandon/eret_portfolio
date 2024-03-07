import PageSection from "@/atomic-design/Molecules/PageSection/PageSection";
import React from "react";

type PageSectionGroupProps = {
  sections: string[];
  sectionReferences: React.RefObject<HTMLDivElement | null>[];
};

const PageSectionGroup = ({
  sections,
  sectionReferences,
}: PageSectionGroupProps) => {
  return (
    <div className="flex flex-col justify-start items-start gap-8">
      {sections.map((section, index) => {
        return (
          <PageSection
            sectionName={section}
            key={index}
            sectionReference={sectionReferences[index]}
          />
        );
      })}
    </div>
  );
};

export default PageSectionGroup;
