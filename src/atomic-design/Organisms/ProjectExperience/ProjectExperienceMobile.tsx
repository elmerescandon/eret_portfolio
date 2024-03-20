import ExternalLink from "@/atomic-design/Atoms/Links/ExternalLink/ExternalLink";
import Headline from "@/atomic-design/Atoms/Typography/Headline";
import ProjectCard from "@/atomic-design/Molecules/ProjectCard/ProjectCard";
import webProjects from "@/utils/information/webProjects";

const ProjectExperienceMobile = () => {
  return (
    <div className="flex flex-col items-start gap-8 w-full">
      <Headline type="small">Projects</Headline>
      <div className="flex flex-col gap-6">
        {webProjects.map((project, index) => {
          return <ProjectCard size="mobile" project={project} key={index} />;
        })}
      </div>
      <ExternalLink href="" title="View all projects" />
    </div>
  );
};

export default ProjectExperienceMobile;
