import { ProjectProps } from "@/app/utils/types";
import { getFormattedDate } from "@/app/utils/utils";
import Card from "@/app/ui/common/card/card";
import { getDictionary } from "@/app/[lang]/dictionaries";
import ThreadSwatch from "@/app/ui/projects-list/components/thread-swatch";

type ProjectTileProps = {
  lang: string;
  project: ProjectProps;
};

export default async function ProjectCard({ lang, project }: ProjectTileProps) {
  const dictionary = await getDictionary(lang);
  const buttons = [
    {
      id: "btn-edit-project",
      label: "edytuj",
      link: `${lang}/projects/${project.id}`,
    },
  ];

  return (
    <div className="flex flex-col">
      <Card tapeLabel={getFormattedDate(project.finishDate)} buttons={buttons}>
        <h3>{project.name}</h3>
        {project.threads && (
          <div className="flex justify-start flex-wrap gap-2 py-2 border-y border-gray-300">
            {project.threads.map((thread) => {
              return <ThreadSwatch key={thread.id} threadId={thread.id} />;
            })}
          </div>
        )}
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
          {project.budget?.price && (
            <div className="flex justify-between">
              <span>{dictionary.project.price}</span>
              <span>{project.budget.price}</span>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
