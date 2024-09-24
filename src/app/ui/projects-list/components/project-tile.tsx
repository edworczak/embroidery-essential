import { ProjectProps } from "@/app/utils/types";
import Image from "next/image";
import Link from "next/link";
import { rotateElement } from "@/app/utils/utils";

type ProjectTileProps = {
    project: ProjectProps;
};

export default function ProjectTile({ project }: ProjectTileProps) {
    const defaultImage =
        "https://images.unsplash.com/photo-1570073141869-2b9947394c95?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div>
            <Link href="#" className="bg-white gap-6 flex p-3">
                <div
                    className="aspect-square relative w-[160px] border-white border-4 shadow-md"
                    style={rotateElement(8)}
                >
                    <Image
                        src={project.img || defaultImage}
                        alt={project.name}
                        fill
                        className="object-cover"
                    />
                    {project.finishDate && (
                        <span
                            className="absolute -right-2 bottom-0 text-nowrap inline-block px-2 py-1 bg-white shadow-md"
                            style={rotateElement(6)}
                        >
                            {project.finishDate}
                        </span>
                    )}
                </div>
                <div className="flex flex-col justify-between py-2 grow pr-3">
                    <h3>{project.name}</h3>
                    <div>
                        {project.startDate && (
                            <div className="flex justify-between">
                                <span>data rozpoczęcia</span>
                                <span>{project.startDate}</span>
                            </div>
                        )}
                        {project.hoop && (
                            <div className="flex justify-between">
                                <span>tamborek</span>
                                <span>{project.hoop}</span>
                            </div>
                        )}
                    </div>
                </div>
            </Link>
            <div className="flex justify-end px-2 gap-2">
                <button className="rounded-b-[20px] bg-ocean text-white rounded-t-none">
                    edytuj
                </button>
                {!project.finished && (
                    <button className="rounded-b-[20px] bg-ocean text-white rounded-t-none">
                        kontynuuj
                    </button>
                )}
            </div>
        </div>
    );
}
