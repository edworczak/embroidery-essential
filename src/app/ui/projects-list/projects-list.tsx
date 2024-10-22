import ProjectCard from "@/app/ui/projects-list/components/project-card";
import { userProjects } from "@/app/data/user-projects";

type ProjectListProps = {
  lang: string;
  open?: boolean;
  finished?: boolean;
};

export default function ProjectsList({
  lang,
  open = true,
  finished = true,
}: ProjectListProps) {
  return (
    <div className="dynamic-grid-3-cols">
      {userProjects.map((project) => {
        if ((!open && !project.finished) || (!finished && project.finished))
          return;
        return <ProjectCard lang={lang} key={project.id} project={project} />;
      })}
    </div>
  );
}
