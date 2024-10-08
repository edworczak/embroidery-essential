import ProjectsList from "@/app/ui/projects-list/projects-list";
import { getDictionary } from "@/app/[lang]/dictionaries";

type ProjectsPageProps = {
  lang: string;
};
export default async function ProjectsPage({ lang }: ProjectsPageProps) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <section>
        <h1>{dictionary.pages.projects.h1}</h1>
      </section>
      <section>
        <ProjectsList />
      </section>
    </>
  );
}
