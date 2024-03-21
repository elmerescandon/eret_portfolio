import NavigationBarDesktop from "./NavigationBarDesktop";
import NavigationBarMobile from "./NavigationBarMobile";
import NavigationBarTablet from "./NavigationBarTablet";

type NavigationBarProps = {
  sectionReferences: React.RefObject<HTMLDivElement | null>[];
  handleOpenMenu?: () => void;
};

const NavigationBar = ({
  sectionReferences,
  handleOpenMenu = () => {},
}: NavigationBarProps) => {
  return (
    <div>
      <div className="min-[1440px]:block hidden">
        <NavigationBarDesktop sectionReferences={sectionReferences} />;
      </div>
      <div className="max-[1440px]:block hidden max-[360px]:hidden">
        <NavigationBarTablet sectionReferences={sectionReferences} />;
      </div>
      <div className="max-[360px]:block hidden">
        <NavigationBarMobile handleOpenMenu={handleOpenMenu} />;
      </div>
    </div>
  );
};

export default NavigationBar;
