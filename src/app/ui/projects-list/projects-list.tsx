import { ProjectProps } from "@/app/utils/types";
import ProjectTile from "@/app/ui/projects-list/components/project-tile";

type ProjectsListProps = {
    projects: [ProjectProps];
};

export default function ProjectsList({ projects }: ProjectsListProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => {
                return <ProjectTile key={project.id} project={project} />;
            })}
        </div>
    );
}
