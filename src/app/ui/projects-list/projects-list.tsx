import { ProjectProps } from "@/app/utils/types";
import ProjectCard from "@/app/ui/projects-list/components/project-card";

type ProjectsListProps = {
    projects: ProjectProps[];
};

export default function ProjectsList({ projects }: ProjectsListProps) {
    return (
        <div className="dynamic-grid-3-cols">
            {projects.map((project) => {
                return <ProjectCard key={project.id} project={project} />;
            })}
        </div>
    );
}
