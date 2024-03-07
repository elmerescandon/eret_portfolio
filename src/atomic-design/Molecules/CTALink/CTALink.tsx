import CTAIcons from "@/atomic-design/Atoms/Icons/CTAIcons/CTAIcons";
import ICallToAction from "@/utils/interfaces/ICallToAction";
import Link from "next/link";
import React from "react";

type CTALinkProps = {
  cta: ICallToAction;
};

const CTALink = ({cta}: CTALinkProps) => {
  const {icon, link} = cta;
  const {url, title} = link;
  return (
    <div className="w-full flex justify-between">
      <CTAIcons callToAction={icon} />
      <a href={url} target="_blank">
        {title}
      </a>
    </div>
  );
};

export default CTALink;
