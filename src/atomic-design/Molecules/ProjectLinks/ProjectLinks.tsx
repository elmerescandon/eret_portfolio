import ExternalLink from "@/atomic-design/Atoms/Links/ExternalLink/ExternalLink";
import ILink from "@/utils/interfaces/ILink";
import React from "react";

type ProjectLinksProps = {
  links: ILink[];
};

const ProjectLinks = ({links}: ProjectLinksProps) => {
  return (
    <div className="flex justify-start items-center gap-6">
      {links.map((link, index) => (
        <ExternalLink key={index} href={link.url} title={link.title} />
      ))}
    </div>
  );
};

export default ProjectLinks;
