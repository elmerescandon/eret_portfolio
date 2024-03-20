import React from "react";
import BioTechnologies from "../BioTechnologies/BioTechnologies";
import ITechnologiesLabel from "@/utils/interfaces/ITechnologies";
import Body from "@/atomic-design/Atoms/Typography/Body";
import Headline from "@/atomic-design/Atoms/Typography/Headline";
import ProfileImage from "@/atomic-design/Atoms/Images/ProfileImage/ProfileImage";

type BioInformationDesktopProps = {
  technologies: ITechnologiesLabel[];
};

const BioInformationDesktop = ({technologies}: BioInformationDesktopProps) => {
  return (
    <div className="flex gap-6 items-start max-w-[880px] w-full">
      <div className="flex flex-col gap-4">
        <Headline type="large">About me</Headline>
        <Body type="large">
          After working in research across several engineering areas, nowadays I
          spend my time in creating cutting-edge digital experiences in the web.
          In the future, I expect to become a digital product designer with a
          proficient technical background in interaction design.
        </Body>
        <Body type="large">
          I have worked building web apps for an{" "}
          <span className="font-bold">outsourcing company</span> and two
          international audio brands. Now, I lead the technical implementation
          of a telemedicine application for a healthcare company —{" "}
          <span className="font-bold">Salufy at Aika Corp </span> .
        </Body>

        <BioTechnologies size="big" technologies={technologies} />
      </div>
      <ProfileImage />
    </div>
  );
};

export default BioInformationDesktop;
