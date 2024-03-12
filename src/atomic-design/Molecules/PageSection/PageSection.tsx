"use client";
import React, {use, useEffect, useState} from "react";

type PageSectionProps = {
  sectionName: string;
  sectionReference: React.RefObject<HTMLDivElement | null>;
};

const PageSection = ({sectionName, sectionReference}: PageSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isObserved, setIsObserved] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scrollToView = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({behavior: "smooth", block: "center"});
  };

  useEffect(() => {
    console.log("hola");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsObserved(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0.5, // Callback will run when 50% of the target is visible
      }
    );

    if (sectionReference.current) {
      observer.observe(sectionReference.current);
    }
    return () => {
      if (sectionReference.current) {
        observer.unobserve(sectionReference.current);
      }
    };
  }, []);

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
          width: isHovered || isObserved ? "100px" : "50px",
          borderColor: isHovered || isObserved ? "black" : "#6B7280",
        }}
      />
      <p
        className="text-2xl"
        style={{
          fontWeight: isHovered || isObserved ? "bold" : "normal",
          color: isHovered || isObserved ? "black" : "#6B7280",
          transition: "color 0.5s",
        }}
      >
        {sectionName}
      </p>
    </button>
  );
};

export default PageSection;
