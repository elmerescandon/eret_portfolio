import Techonlogies from "../enums/Technologies";
import IProject from "../interfaces/IProject";

const academiaProjects: IProject[] = [
    {
        title: "Amaru Maki",
        description: `Amaru Maki is an upper arm wearable for physiotherapy sessions. 
        The wearable measures the Range of Motion (ROM) of three arm joints: 
        the elbow flexion-extension, wrist flexion-extension, and wrist pronation-supination. 
        It communicates wirelessly through a graphical interface which displays in real-time the 
        movement of each joint. This project took part as a final project for my undergraduate degree.`,
        launchDate: "January 2022 - September, 2022",
        links: [
            {
                title: "Repository",
                url: "https://github.com/elmerescandon/amaru_maki?tab=readme-ov-file",
            },
            {
                title: "Demo",
                url: "https://www.youtube.com/watch?v=q8bD5Qh6OyA",
            },
        ],
        technologies: [
            Techonlogies.ARDUINO,
            Techonlogies.PYTHON,
            Techonlogies.C,
        ],
        imagePath: "/projects/academia/amaru_maki_project.png",

    },
    {
        title: "Kinematic control and gait planning for the Mini-Cheetah robot",
        description: `The project is part of the Advanced Robotics course. The goal is to develop a kinematic 
        control and gait planning using the free-floating approach and quadratic programming.`,
        launchDate: "September 2021 - December 2021",
        links: [
            {
                title: "Repository",
                url: "https://github.com/elmerescandon/KC_GP_Quadruped",
            },
            {
                title: "Notes",
                url: "https://turtlebot3.notion.site/turtlebot3/Mini-Cheetah-07cc6632ab36498e83ff4f07a6368092",
            },
        ],
        technologies: [
            Techonlogies.MATLAB,
            Techonlogies.PYTHON,
            Techonlogies.CPP,
        ],
        imagePath: "/projects/academia/cheetah_project.png",
    },
    {
        title: "Hand Movement Classification: sEMG signals",
        description: `The reasearch evaluated the Fractal Dimension feature to classify hand movements using sEMG signals.
        The first part determine the dimensional distance accross each feature using a self-organizing map (SOM). 
        The clustering was applied for three groups of a pair of movements. With the results, significance distance was calculated.
        The second part improves the classification technique increasing the dimensionality of the feature space. As a result, a Support Vector Machine was implemented.
        Our results provided an average of 85% accuracy in the classification of hand movements for three,four and five movements.`,
        launchDate: "March 20202 - September 2020",
        links: [
            {
                title: "Paper SOM",
                url: "https://ieeexplore.ieee.org/abstract/document/9253761",
            },
            {
                title: "Paper SVM",
                url: "https://link.springer.com/chapter/10.1007/978-3-030-75680-2_96",
            },
        ],
        technologies: [
            Techonlogies.MATLAB,
            Techonlogies.PYTHON,
            Techonlogies.CPP,
        ],
        imagePath: "/projects/academia/hand_classification_project.png",
    },
    {
        title: "Mechatronics and Robotics Laboratory",
        description: `I worked as an undergraduated research assistant in the Mechatronics and Robotics Laboratory, where
        I participated in three projects: a minimax checkers algorithm for a delta robot, a gecko-inspired robot,
        and a quadruped robot. Additionally, I created three workshops to teach the basics of robotics and programming to high school students.
        Some of my results are shown below.`,
        launchDate: "March 2018 - December 2019",
        links: [
            {
                title: "Paper Gecko Robot",
                url: "https://ieeexplore.ieee.org/abstract/document/8853601",
            },
            {
                title: "Paper Minimax",
                url: "https://ieeexplore.ieee.org/abstract/document/8526375/",
            },
        ],
        technologies: [
            Techonlogies.MATLAB,
            Techonlogies.PYTHON,
            Techonlogies.CPP,
        ],
        imagePath: "/projects/academia/mr_project.png",
    },
];

export default academiaProjects;
