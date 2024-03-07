import ICallToAction from "./interfaces/ICallToAction";
import CallToActions from "./enums/CallToActions";

export const navigationSections = ["About", "Experience", "Projects"];

export const callToActionArray: ICallToAction[] = [
  {
    link: {
      url: "https://github.com/elmerescandon",
      title: "Github",
    },
    icon: CallToActions.GITHUB,
  },
  {
    link: {
      url: "https://scholar.google.com/citations?hl=es&user=cDpA43kAAAAJ",
      title: "Google Scholar",
    },
    icon: CallToActions.GOOGLE_SHOLAR,
  },
  {
    link: {
      url: "https://www.linkedin.com/in/elmerescandontufino/",
      title: "LinkedIn",
    },
    icon: CallToActions.LINKEDIN,
  },
  {
    link: {
      url: "mailto:elmer.escandontufino@gmail.com",
      title: "Mail",
    },
    icon: CallToActions.MAIL,
  },
];
