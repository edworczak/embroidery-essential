import { ProjectProps } from "@/app/utils/types";
import Image from "next/image";
import Link from "next/link";
import { getFormattedDate, rotateElement } from "@/app/utils/utils";
import CardButtons from "@/app/ui/common/card-buttons";
import TapeLabel from "@/app/ui/common/tape-label";

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

    if (!project.finished)
        buttons.push({ id: "btn-continue", label: "kontynuuj" });

    return (
        <div className="flex flex-col">
            <Link href="#" className="bg-white gap-4 flex p-2 grow shadow-md">
                <div className="relative shrink-0 min-w-[120px]">
                    <div
                        className="aspect-square relative w-full border-white border-4 shadow-md"
                        style={rotateElement(8)}
                    >
                        <Image
                            src={project.img || defaultImage}
                            alt={project.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {project.finishDate && (
                        <TapeLabel
                            label={getFormattedDate(project.finishDate)}
                            cssClasses="-right-2 -bottom-2"
                        />
                    )}
                </div>
                <div className="flex flex-col justify-between py-2 pr-3 grow">
                    <h3 className="mb-6">{project.name}</h3>
                </div>
            </Link>
            <CardButtons buttons={buttons} />
        </div>
    );
}
