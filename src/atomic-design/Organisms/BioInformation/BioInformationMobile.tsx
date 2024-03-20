import React from "react";
import BioTechnologies from "../BioTechnologies/BioTechnologies";
import ITechnologiesLabel from "@/utils/interfaces/ITechnologies";
import Body from "@/atomic-design/Atoms/Typography/Body";
import Headline from "@/atomic-design/Atoms/Typography/Headline";

type BioinformationMobileProps = {
  technologies: ITechnologiesLabel[];
};

const BioinformationMobile = ({technologies}: BioinformationMobileProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Headline type="small">About me</Headline>
      <Body type="small">
        After working in research across several engineering areas, nowadays I
        spend my time in creating cutting-edge digital experiences in the web.
        In the future, I expect to become a digital product designer with a
        proficient technical background in interaction design.
      </Body>
      <Body type="small">
        I have worked building web apps for an{" "}
        <span className="font-bold">outsourcing company</span> and two
        international audio brands. Now, I lead the technical implementation of
        a telemedicine application for a healthcare company —{" "}
        <span className="font-bold">Salufy at Aika Corp </span> .
      </Body>
      <BioTechnologies size="small" technologies={technologies} />
    </div>
  );
};

export default BioinformationMobile;
