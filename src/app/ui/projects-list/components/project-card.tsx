import { ProjectProps } from "@/app/utils/types";
import { getFormattedDate } from "@/app/utils/utils";
import CardButtons from "@/app/ui/common/card-buttons";
import Card from '@/app/ui/common/card/card';

type ProjectTileProps = {
    project: ProjectProps;
};

export default function ProjectCard({ project }: ProjectTileProps) {
    const defaultImage =
        "https://images.unsplash.com/photo-1570073141869-2b9947394c95?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const buttons = [
        {
            id: "btn-edit-project",
            label: "edytuj",
        },
    ];

    return (
        <div className="flex flex-col">
            <Card img={{ src: project.img ? project.img : defaultImage, alt: project.name}} tapeLabel={getFormattedDate(project.finishDate)}>
                    <h3 className="mb-6">{project.name}</h3>
            </Card>
            <CardButtons buttons={buttons} />
        </div>
    );
}
