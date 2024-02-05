import Techonlogies from "../enums/Technologies";
import IProject from "../interfaces/IProject";


const webProjects: IProject[] = [
    {
        title: "Portfolio Theme",
        description: `A portfolio template to showcase your work. Includes a complete responsive design
                     and Material UI 3 principles for the UI design. Please feel free to use it for your own portfolio.`,
        launchDate: "February, 2024",
        links: [
            {
                title: "Repository",
                url: "https://github.com/elmerescandon/eret_portfolio",
            },
            {
                title: 'Figma Design',
                url: 'https://www.figma.com/file/ssm9dk3ABNdmvPL2HDHJ6h/Portfolio---System-Design?type=design&node-id=0%3A1&mode=design&t=PqZcTjCqDk2H3Xzk-1'
            }
        ],
        technologies: [Techonlogies.REACT, Techonlogies.TYPESCRIPT, Techonlogies.FIGMA, Techonlogies.TAILWIND, Techonlogies.NEXTJS],
        imagePath: "/projects/web/portfolio_project.png",
    },
    {
        title: "The Movie Database App",
        description: `This is a web application that allows users to 
            search for movies and TV shows. It uses the TMDB 
            API to fetch the data. The app was the final project to graduate
            from the Applaudo React Trainee, where I achieved one of the highest scores.`,
        launchDate: "January, 2023",
        links: [
            {
                title: "Website",
                url: "https://tmdb-applaudo.vercel.app",
            },
        ],
        technologies: [Techonlogies.REACT, Techonlogies.TYPESCRIPT, Techonlogies.REDUX, Techonlogies.JEST],
        imagePath: "/projects/web/tmdb_project.png",
    },
    {
        title: "Marvel Atheneum",
        description: `This web application display the information from the Marvel Comics API. It
                      returns information as cards for each comic, as well as similar stories and events.
                      The app was developed using React and Redux for the Applaudo React Trainee`,
        launchDate: "January, 2023",
        links: [
            {
                title: "Website",
                url: "https://marvel-atheneum-8.vercel.app/",
            },
        ],
        technologies: [Techonlogies.REACT, Techonlogies.TYPESCRIPT, Techonlogies.REDUX, Techonlogies.JEST, Techonlogies.SASS],
        imagePath: "/projects/web/marvel_project.png",
    },

];

export default webProjects;
