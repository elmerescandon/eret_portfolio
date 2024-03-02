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
      <p className="text-base font-normal">{content}</p>
      <BioTechnologies technologies={technologies} />
    </div>
  );
};

export default BioInformation;
