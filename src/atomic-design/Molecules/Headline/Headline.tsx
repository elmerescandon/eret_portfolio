import Display from "@/atomic-design/Atoms/Typography/Display";
import {headlineSubtitle, hepadlineTitle} from "@/utils/constantsHeadline";
import React from "react";

type HeadlineDesktopProps = {
  size: "desktop" | "mobile";
};

const HeadlineDesktop = ({size}: HeadlineDesktopProps) => {
  const {black, blue, orange} = headlineSubtitle;
  return (
    <div className="relative w-full">
      <div className="gap-4 p-8 border-4 border-black bg-white">
        <Display type={size === "desktop" ? "large" : "small"}>
          {hepadlineTitle}
        </Display>
        <p
          className={`${
            size === "desktop"
              ? "text-[32px] font-regular leading-[40px]"
              : "text-[24px] font-medium leading-[32px]"
          }`}
        >
          <span className="text-port-orange">{orange}</span>
          <span className="text-port-black">{black}</span>
          <span className="text-port-blue">{blue}</span>
        </p>
      </div>
      <div className="-ml-3 mt-3 absolute w-full h-full bg-port-pink top-0 left-0 -z-10"></div>
    </div>
  );
};

export default HeadlineDesktop;
