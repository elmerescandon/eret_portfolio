import Techonlogies from "../enums/Technologies";

interface ILink {
    title: string,
    url: string,
}


interface IProject {
    title: string,
    description: string,
    launchDate: string,
    links: ILink[],
    technologies: Techonlogies[],
    imagePath: string,
}

export default IProject;
