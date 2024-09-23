import {ProjectProps} from "@/app/utils/types";
import Image from "next/image";
import Link from "next/link";

type ProjectTileProps = {
    project: ProjectProps;
}

export default function ProjectTile({ project }: ProjectTileProps) {
    const defaultImage = 'https://images.unsplash.com/photo-1570073141869-2b9947394c95?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    return (
        <Link href="#" className="bg-white gap-4 flex rounded overflow-hidden">
            <div className="aspect-square relative w-[100px]">
                <Image src={project.img || defaultImage} alt={project.name} fill className="object-cover"/>
            </div>
            <div className="flex flex-col justify-between py-2 grow pr-6">
                <h3>
                    {project.name}
                </h3>
            </div>
        </Link>
    );
}