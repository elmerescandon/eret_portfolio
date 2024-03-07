import Technologies from "./enums/Technologies";
import ITechnologiesLabel from "./interfaces/ITechnologies";

export const bioContent = `After working in research across several engineering areas, nowadays I spend my time in creating cutting-edge digital experiences in the web. In the future, I expect to become a digital product designer with a proficient technical background in interaction design.

I have worked building web apps for an outsourcing company and two international audio brands. Now, I lead the technical implementation of a telemedicine application for a healthcare company — Salufy at Aika Corp.`;

export const bioTechnologies: ITechnologiesLabel[] = [
  {
    technology: Technologies.REACT,
    technologyTitle: "React",
  },
  {
    technology: Technologies.NEXTJS,
    technologyTitle: "Next.js",
  },
  {
    technology: Technologies.TAILWIND,
    technologyTitle: "Tailwind CSS",
  },
  {
    technology: Technologies.TYPESCRIPT,
    technologyTitle: "TypeScript",
  },
  {
    technology: Technologies.FIREBASE,
    technologyTitle: "Firebase",
  },

  {
    technology: Technologies.FIGMA,
    technologyTitle: "Figma",
  },
];
