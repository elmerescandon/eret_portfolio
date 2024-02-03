import Techonlogies from "../enums/Technologies";
import IProject from "../interfaces/IProject";


const webProjects: IProject[] = [
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
        technologies: [Techonlogies.REACT, Techonlogies.TYPESCRIPT, Techonlogies.REDUX],
        imagePath: "/projects/web/tmdb_project.png",
    },
];

export default webProjects;
