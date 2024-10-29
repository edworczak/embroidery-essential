import ProjectsList from "@/app/ui/projects-list/projects-list";
import { getDictionary } from "@/app/[lang]/dictionaries";
import Header from "@/app/ui/common/header";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

type ProjectsPageProps = {
  lang: string;
};
export default async function ProjectsPage({ lang }: ProjectsPageProps) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Header
        title={dictionary.projects.h1}
        button={{
          id: "newProject",
          label: dictionary.project.newProject,
          action: { link: `/${lang}/projects/new` },
          icon: faPlus,
        }}
      />
      <section>
        <ProjectsList lang={lang} />
      </section>
    </>
  );
}
