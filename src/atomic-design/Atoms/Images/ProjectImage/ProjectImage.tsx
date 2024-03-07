import Image from "next/image";
import React from "react";

type ProjectImageProps = {
  src: string;
  alt: string;
};

const ProjectImage = ({src, alt}: ProjectImageProps) => {
  return (
    <div className="relative w-[168px] h-[168px]">
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        className="border-4 border-black bg-white w-[168px] h-[168px] object-cover"
      />
      <div className="-ml-3 mt-3 absolute w-full h-full bg-port-orange top-0 left-0 -z-10"></div>
    </div>
  );
};

export default ProjectImage;
