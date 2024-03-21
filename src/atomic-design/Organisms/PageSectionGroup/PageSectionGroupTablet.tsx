import PageSectionRail from "@/atomic-design/Molecules/PageSection/PageSectionRail";
import React from "react";

type PageSectionGroupTabletProps = {
  sectionReferences: React.RefObject<HTMLDivElement | null>[];
};

const PageSectionGroupTablet = ({
  sectionReferences,
}: PageSectionGroupTabletProps) => {
  const sectionNames = ["user", "briefcase", "terminal"];
  return (
    <div className="flex flex-col justify-start items-start gap-8">
      {sectionNames.map((section, index) => {
        return (
          <PageSectionRail
            sectionName={section as "user" | "briefcase" | "terminal"}
            key={index}
            sectionReference={sectionReferences[index]}
          />
        );
      })}
    </div>
  );
};

export default PageSectionGroupTablet;
