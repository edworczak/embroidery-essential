import ProjectCard from "@/app/ui/projects-list/components/project-card";
import { userProjects } from '@/app/data/user-projects';

export default function ProjectsList() {
    return (
        <div className="dynamic-grid-3-cols">
            {userProjects.map((project) => {
                return <ProjectCard key={project.id} project={project} />;
            })}
        </div>
    );
}
