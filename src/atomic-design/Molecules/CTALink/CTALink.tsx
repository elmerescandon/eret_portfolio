"use client";
import CTAIcons from "@/atomic-design/Atoms/Icons/CTAIcons/CTAIcons";
import ICallToAction from "@/utils/interfaces/ICallToAction";
import React, {useState} from "react";

type CTALinkProps = {
  cta: ICallToAction;
};

const CTALink = ({cta}: CTALinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const {icon, link} = cta;
  const {url, title} = link;
  return (
    <a
      className="w-full flex justify-between items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={url}
      target="_blank"
    >
      <CTAIcons callToAction={icon} />
      <p
        style={{
          fontWeight: isHovered ? "bold" : "normal",
          transition: "font-weight 0.2s",
        }}
      >
        {title}
      </p>
    </a>
  );
};

export default CTALink;
