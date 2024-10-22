import { getDictionary } from "@/app/[lang]/dictionaries";
import { ProjectProps } from "@/app/utils/types";
import { getFormattedDate } from "@/app/utils/utils";
import BudgetSummary from "@/app/ui/common/budget-summary";
import ThreadsList from "@/app/ui/threads-list/threads-list";
import Header from "@/app/ui/common/header";
import TapeLabel from "@/app/ui/common/tape-label";
import { faCalendarCheck, faPencil } from "@fortawesome/free-solid-svg-icons";

type ProjectPageProps = {
  lang: string;
  project: ProjectProps;
};
export default async function ProjectPage({ lang, project }: ProjectPageProps) {
  const dictionary = await getDictionary(lang);
  const {
    id,
    name,
    startDate,
    finished,
    finishDate,
    hoop,
    fabric,
    budget,
    threads,
  } = project;
  const threadsArray =
    threads &&
    threads.map((thread) => {
      return thread.id;
    });

  return (
    <>
      <Header
        title={name}
        button={{
          id: "editProject",
          label: dictionary.cta.edit,
          action: { link: `projects/edit/${id}` },
          icon: faPencil,
        }}
      />
      <section>
        <div className="dynamic-grid-3-cols">
          <div className="card p-4 flex flex-col gap-2 relative">
            {finishDate && (
              <TapeLabel
                label={getFormattedDate(finishDate)}
                icon={faCalendarCheck}
                top={-2}
                right={-2}
              />
            )}
            <div className="mb-2">
              <h2>{dictionary.project.info}</h2>
            </div>
            {startDate && (
              <div className="flex justify-between">
                <span>{dictionary.project.startDate}</span>
                <span>{getFormattedDate(startDate)}</span>
              </div>
            )}
            {finishDate && (
              <div className="flex justify-between">
                <span>{dictionary.project.finishDate}</span>
                <span>{getFormattedDate(finishDate)}</span>
              </div>
            )}
            {hoop && (
              <div className="flex justify-between">
                <span>{dictionary.project.hoop}</span>
                <span>{hoop}</span>
              </div>
            )}
            {fabric && (
              <div className="flex justify-between">
                <span>{dictionary.project.fabric}</span>
                <span>{fabric}</span>
              </div>
            )}
          </div>
          {budget && <BudgetSummary budget={budget} dictionary={dictionary} />}
        </div>
      </section>
      {threads && (
        <>
          <Header
            title={dictionary.project.threads}
            h2
            button={{
              id: "editThreads",
              label: dictionary.cta.edit,
              action: { link: `projects/edit/${id}` },
              icon: faPencil,
            }}
          />
          <section>
            <ThreadsList threadsArray={threadsArray} />
          </section>
        </>
      )}
    </>
  );
}
