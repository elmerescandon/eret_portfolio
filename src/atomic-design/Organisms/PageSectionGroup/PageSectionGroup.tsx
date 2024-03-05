import PageSection from "@/atomic-design/Molecules/PageSection/PageSection";
import React from "react";

type PageSectionGroupProps = {
  sections: string[];
};

const PageSectionGroup = ({sections}: PageSectionGroupProps) => {
  return (
    <div className="flex flex-col justify-start items-start gap-8">
      {sections.map((sections, index) => {
        return <PageSection sectionName={sections} key={index} />;
      })}
    </div>
  );
};

export default PageSectionGroup;
