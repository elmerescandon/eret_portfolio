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
      Technologies.FIREBASE,
      Technologies.NEXTJS,
      Technologies.REACT,
      Technologies.FIGMA,
      Technologies.REDUX,
    ],
    time: {
      startDate: "JUL 2023",
      endDate: "PRESENT",
      duration: "8 months",
    },
  },
];

export default workExpreience;
