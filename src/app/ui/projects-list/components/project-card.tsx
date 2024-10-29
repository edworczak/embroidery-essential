import { ProjectProps } from "@/app/utils/types";
import { getFormattedDate } from "@/app/utils/utils";
import Card from "@/app/ui/common/card/card";
import { getDictionary } from "@/app/[lang]/dictionaries";
import ThreadSwatch from "@/app/ui/projects-list/components/thread-swatch";
import TapeLabel from "@/app/ui/common/tape-label";
import {
  faCalendarCheck,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

type ProjectTileProps = {
  lang: string;
  project: ProjectProps;
};

export default async function ProjectCard({ lang, project }: ProjectTileProps) {
  const dictionary = await getDictionary(lang);
  const buttons = !project.finished && [
    {
      id: "btn-add-session",
      label: "kontynuuj",
      icon: faStopwatch,
      action: { link: `${lang}/projects/${project.id}` },
    },
  ];

  return (
    <div className="flex flex-col">
      <Card
        title={{ title: project.name }}
        tapeLabel={getFormattedDate(project.finishDate)}
        link={`/${lang}/projects/${project.id}`}
      >
        {project.finished && (
          <TapeLabel
            label={getFormattedDate(project.finishDate)}
            top={-8}
            right={-8}
            icon={faCalendarCheck}
          />
        )}
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
          {project.budget?.price && (
            <div className="flex justify-between">
              <span>{dictionary.project.price}</span>
              <span>{project.budget.price}</span>
            </div>
          )}
          {project.finished && (
            <div className="flex justify-between">
              <span>{dictionary.project.finished}</span>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
