import {imageTechnologies} from "@/utils/constants";
import Image from "next/image";

type TechnologyIconsProps = {
  technology: string;
  size: "small" | "big";
};

const TechnologyIcons = ({technology, size}: TechnologyIconsProps) => {
  return (
    <Image
      src={imageTechnologies[technology as keyof typeof imageTechnologies]}
      className={`${size === "small" ? "w-8 h-8" : "w-12 h-12"} rounded-full`}
      alt={`${technology}-icon`}
      width={size === "small" ? 30 : 48}
      height={size === "small" ? 30 : 48}
      loading="lazy"
    />
  );
};

export default TechnologyIcons;
