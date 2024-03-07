import IWorkTime from "./IWorkTime";

interface IWork {
  time: IWorkTime;
  company: string;
  position: string;
  description: string;
  technologies: string[];
}

export default IWork;
