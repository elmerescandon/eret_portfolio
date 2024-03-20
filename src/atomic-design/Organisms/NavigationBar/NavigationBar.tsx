import NavigationBarDesktop from "./NavigationBarDesktop";
import NavigationBarTablet from "./NavigationBarTablet";

type NavigationBarProps = {
  sectionReferences: React.RefObject<HTMLDivElement | null>[];
};

const NavigationBar = ({sectionReferences}: NavigationBarProps) => {
  return (
    <div>
      <div className="min-[1440px]:block hidden">
        <NavigationBarDesktop sectionReferences={sectionReferences} />;
      </div>
      <div className="max-[1440px]:block hidden">
        <NavigationBarTablet sectionReferences={sectionReferences} />;
      </div>
    </div>
  );
};

export default NavigationBar;
