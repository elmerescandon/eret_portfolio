import {imageCallToActions, imageTechnologies} from "@/utils/constants";
import Image from "next/image";

interface CTAIconsProps {
  callToAction: string;
  size: "small" | "large";
}

const CTAIcons = ({callToAction, size}: CTAIconsProps) => {
  return (
    <Image
      src={imageCallToActions[callToAction as keyof typeof imageCallToActions]}
      className={`${size === "large" ? "w-12 h-12" : "w-8 h-8"}`}
      alt={`${callToAction}-icon`}
      width={size === "large" ? 48 : 30}
      height={size === "large" ? 48 : 30}
      loading="lazy"
    />
  );
};

export default CTAIcons;
