import Link from "next/link";
import React from "react";

type ButtonLinkProps = {
  href: string;
  text: string;
};

const ButtonLink = ({href, text}: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className="bg-port-blue text-white border rounded-xl
    hover:bg-white hover:text-port-blue hover:border-port-blue text-base font-semibold"
    >
      {text}
    </Link>
  );
};

export default ButtonLink;
