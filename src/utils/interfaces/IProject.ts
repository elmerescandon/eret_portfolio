import Techonlogies from "../enums/Technologies";
import ILink from "./ILink";

interface IProject {
  title: string;
  description: string;
  launchDate: string;
  links: ILink[];
  technologies: Techonlogies[];
  imagePath: string;
}

export default IProject;
