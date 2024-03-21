/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {MenuIcons} from "@/atomic-design/Atoms/Icons/MenuIcons/MenuIcons";
import React, {useEffect, useState} from "react";

type PageSectionRailProps = {
  sectionName: "briefcase" | "terminal" | "user";
  sectionReference: React.RefObject<HTMLDivElement | null>;
};

const PageSectionRail = ({
  sectionName,
  sectionReference,
}: PageSectionRailProps) => {
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsObserved(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0.3, // Callback will run when 50% of the target is visible
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
      className="w-12 h-12 flex items-center justify-center rounded-full"
      style={{
        backgroundColor: isHovered || isObserved ? "black" : "white",
        transition: "background-color 0.3s",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => scrollToView(sectionReference)}
    >
      <MenuIcons
        icon={sectionName}
        other={`${isHovered || isObserved ? "text-white" : "text-black"}`}
      />
    </button>
  );
};

export default PageSectionRail;
