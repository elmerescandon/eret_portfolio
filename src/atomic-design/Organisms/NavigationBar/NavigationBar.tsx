import NavigationBarDesktop from "./NavigationBarDesktop";
import NavigationBarMobile from "./NavigationBarMobile";
import NavigationBarTablet from "./NavigationBarTablet";

type NavigationBarProps = {
  sectionReferences: React.RefObject<HTMLDivElement | null>[];
  handleOpenMenu?: () => void;
  openMenu?: boolean;
};

const NavigationBar = ({
  sectionReferences,
  openMenu = false,
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
        <NavigationBarMobile
          handleOpenMenu={handleOpenMenu}
          openMenu={openMenu}
        />
        ;
      </div>
    </div>
  );
};

export default NavigationBar;
