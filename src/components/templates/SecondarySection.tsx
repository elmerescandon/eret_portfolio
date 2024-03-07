import React from "react";
import AreaSection from "../organisms/AreaSection/AreaSection";
import webProjects from "@/utils/information/webProjects";
import academiaProjects from "@/utils/information/academiaProjects";

const SecondarySection = () => {
  return (
    <div>
      <AreaSection title="Web Development" projects={webProjects} />
      <AreaSection title="Academia" projects={academiaProjects} />
      <AreaSection title="Design" projects={[]} />
      <AreaSection title="Personal" projects={[]} />
    </div>
  );
};

export default SecondarySection;
