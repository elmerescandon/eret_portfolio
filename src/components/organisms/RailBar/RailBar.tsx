import Pronouns from "@/atomic-design/Molecules/Pronouns/Pronouns";
import ReferenceLinks from "@/components/molecules/ReferenceLinks/ReferenceLinks";
import SectionsBar from "@/components/molecules/SectionsBar/SectionsBar";
import Image from "next/image";
import React from "react";

const RailBar = () => {
  return (
    <div className="w-[360px] min-w-[300px] flex flex-col max-xl:hidden pl-[32px]">
      <div className="w-full h-96 flex justify-center items-center">
        <Image
          src="/icons/atom_icon.svg"
          alt="portofolio-logo"
          width={144}
          height={144}
        />
      </div>
      <div className="w-full ">
        <SectionsBar />
        <Pronouns />
        <ReferenceLinks />
      </div>
    </div>
  );
};

export default RailBar;
