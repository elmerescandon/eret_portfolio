"use client";
import React, {useState} from "react";

type PageSectionProps = {
  sectionName: string;
  sectionReference: React.RefObject<HTMLDivElement | null>;
};

const PageSection = ({sectionName, sectionReference}: PageSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scrollToView = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({behavior: "smooth", block: "center"});
  };

  return (
    <button
      className="flex gap-8 items-center justify-start w-full  justify-self-start"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => scrollToView(sectionReference)}
    >
      <hr
        className={` justify-self-start border-black border-2`}
        style={{
          transition: "width 0.5s",
          width: isHovered ? "100px" : "50px",
          borderColor: isHovered ? "black" : "#6B7280",
        }}
      />
      <p
        className="text-2xl"
        style={{
          fontWeight: isHovered ? "bold" : "normal",
          color: isHovered ? "black" : "#6B7280",
          transition: "color 0.5s",
        }}
      >
        {sectionName}
      </p>
    </button>
  );
};

export default PageSection;
