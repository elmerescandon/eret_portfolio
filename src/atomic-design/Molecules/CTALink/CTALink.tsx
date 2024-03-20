"use client";
import CTAIcons from "@/atomic-design/Atoms/Icons/CTAIcons/CTAIcons";
import Body from "@/atomic-design/Atoms/Typography/Body";
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
      <Body
        type="large"
        other={`${
          isHovered ? "font-semibold" : ""
        } transition:font-weight duration-300`}
      >
        {title}
      </Body>
    </a>
  );
};

export default CTALink;
