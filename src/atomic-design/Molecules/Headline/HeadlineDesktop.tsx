import {headlineSubtitle, hepadlineTitle} from "@/utils/constantsHeadline";
import React from "react";

const HeadlineDesktop = () => {
  const {black, blue, orange} = headlineSubtitle;
  return (
    <div className="relative w-[744px]">
      <div className="gap-4 p-8 border-4 border-black bg-white">
        <h1 className="text-4xl font-bold">{hepadlineTitle}</h1>
        <p className="text-2xl font-bold">
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
