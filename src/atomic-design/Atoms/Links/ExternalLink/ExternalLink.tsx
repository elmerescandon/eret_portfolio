"use client";
import {ArrowUpRightIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, {useState} from "react";
import Label from "../../Typography/Label";

type ExternalLinkProps = {
  href: string;
  title: string;
};

const ExternalLink = ({href, title}: ExternalLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center gap-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Label type="large" other="hover:font-bold transition:font-weight-0.2s">
        {title}
      </Label>
      <ArrowUpRightIcon
        height={16}
        width={16}
        style={{
          width: isHovered ? "20px" : "16px",
          height: isHovered ? "20px" : "16px",
          marginTop: isHovered ? "-5px" : "0",
          transition: "width 0.2s, height 0.2s, margin-top 0.2s",
        }}
      />
    </Link>
  );
};

export default ExternalLink;
