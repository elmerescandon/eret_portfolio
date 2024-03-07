import React from "react";
import BioTechnologies from "../BioTechnologies/BioTechnologies";
import ITechnologiesLabel from "@/utils/interfaces/ITechnologies";

type BioInformationProps = {
  content: string;
  technologies: ITechnologiesLabel[];
};

const BioInformation = ({content, technologies}: BioInformationProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold tracking-wide">About me</h1>
      <p className="text-base font-normal">
        After working in research across several engineering areas, nowadays I
        spend my time in{" "}
        <span className="font-bold">
          creating cutting-edge digital experiences
        </span>{" "}
        in the web. In the future, I expect to become a digital product designer
        with a proficient technical background in interaction design.
      </p>
      <p className="text-base font-normal">
        I have worked building web apps for an{" "}
        <span className="font-bold">outsourcing company</span> and two
        international audio brands. Now, I lead the technical implementation of
        a telemedicine application for a healthcare company —{" "}
        <span className="font-bold">Salufy at Aika Corp </span> .
      </p>

      <BioTechnologies technologies={technologies} />
    </div>
  );
};

export default BioInformation;
