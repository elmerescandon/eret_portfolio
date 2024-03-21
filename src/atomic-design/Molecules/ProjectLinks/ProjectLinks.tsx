import ExternalLink from "@/atomic-design/Atoms/Links/ExternalLink/ExternalLink";
import ILink from "@/utils/interfaces/ILink";
import React from "react";

type ProjectLinksProps = {
  links: ILink[];
  size: "desktop" | "mobile";
};

const ProjectLinks = ({links, size}: ProjectLinksProps) => {
  return (
    <div
      className={`flex justify-start gap-2 ${
        size === "desktop" ? "flex-col" : "flex-row"
      }`}
    >
      {links.map((link, index) => (
        <ExternalLink key={index} href={link.url} title={link.title} />
      ))}
    </div>
  );
};

export default ProjectLinks;
