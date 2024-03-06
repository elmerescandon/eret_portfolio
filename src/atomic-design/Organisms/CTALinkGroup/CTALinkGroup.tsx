import CTALink from "@/atomic-design/Molecules/CTALink/CTALink";
import ICallToAction from "@/utils/interfaces/ICallToAction";
import React from "react";

type CTALinkGroupProps = {
  callToActionArray: ICallToAction[];
};

const CTALinkGroup = ({callToActionArray}: CTALinkGroupProps) => {
  return (
    <div className="flex flex-col gap-4 justify-start items-start">
      {callToActionArray.map((cta, index) => {
        return <CTALink cta={cta} key={index} />;
      })}
    </div>
  );
};

export default CTALinkGroup;
