import Technologies from "../enums/Technologies";
import IWork from "../interfaces/IWork";

const workExpreience: IWork[] = [
  {
    company: "Salufy at Aika Corp",
    position: "Fullstack Developer",
    description: `Build, style and deploy the telemedicine application from scratch. 
                  Implemented the Design System (v1), structured the non-relational 
                  database and connected the app with three APIs for authentication, 
                  teleconference and payment.`,
    technologies: [
      Technologies.REACT,
      Technologies.TYPESCRIPT,
      Technologies.REDUX,
      Technologies.NEXTJS,
      Technologies.FIREBASE,
      Technologies.TAILWIND,
      Technologies.FIGMA,
    ],
    time: {
      startDate: "Jul 2023",
      endDate: "Present",
      duration: "8 months",
    },
  },
  {
    company: "Black Sheep Peru",
    position: "eCommerce Developer",
    description: `Implemented UX/UI practices using frontend for two audio brands: Skullcandy Peru and BlackSheep Audio.
                  Reduced in 20% the checkout time and doubled (2x) the interaction time on the product page.
                  Deploy two e-commerce platforms with WordPress and WooCommerce, saving S/.18K in development costs.`,
    technologies: [Technologies.JAVASCRIPT, Technologies.SASS],
    time: {
      startDate: "May 2023",
      endDate: "Jan 2024",
      duration: "8 months",
    },
  },
  {
    company: "Applaudo Studios",
    position: "React Developer Trainee",
    description: `Implemented +5 projects using React. Applied SOLID principles and
                  used fetching data from RESTful APIs. Deployed the projects NextJS and Heroku.
                  Some used libraries include Axios, Redux Thunk React Router, Jest, SASS, and TailwindCSS.`,
    technologies: [
      Technologies.REACT,
      Technologies.JAVASCRIPT,
      Technologies.TYPESCRIPT,
      Technologies.REDUX,
      Technologies.NEXTJS,
      Technologies.JEST,
      Technologies.SASS,
      Technologies.TAILWIND,
    ],
    time: {
      startDate: "Oct 2022",
      endDate: "Feb 2023",
      duration: "4 months",
    },
  },
];

export default workExpreience;
