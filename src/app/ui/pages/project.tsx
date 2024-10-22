import { getDictionary } from "@/app/[lang]/dictionaries";
import { ProjectProps } from "@/app/utils/types";
import { getFormattedDate } from "@/app/utils/utils";

type ProjectPageProps = {
  lang: string;
  project: ProjectProps;
};
export default async function ProjectPage({ lang, project }: ProjectPageProps) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <section>
        <h1>{project.name}</h1>
      </section>
      <section>
        <div className="flex flex-col gap-2">
          {project.startDate && (
            <div className="flex justify-between">
              <span>{dictionary.project.startDate}</span>
              <span>{getFormattedDate(project.startDate)}</span>
            </div>
          )}
          {project.finishDate && (
            <div className="flex justify-between">
              <span>{dictionary.project.finishDate}</span>
              <span>{getFormattedDate(project.finishDate)}</span>
            </div>
          )}
          {project.hoop && (
            <div className="flex justify-between">
              <span>{dictionary.project.hoop}</span>
              <span>{project.hoop}</span>
            </div>
          )}
          {project.fabric && (
            <div className="flex justify-between">
              <span>{dictionary.project.fabric}</span>
              <span>{project.fabric}</span>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
