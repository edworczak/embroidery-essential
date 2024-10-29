import { userProjects } from "@/app/data/user-projects";
import { getDictionary } from "@/app/[lang]/dictionaries";
import ProjectForm from "@/app/ui/project-form/project-form";
import Header from "@/app/ui/common/header";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default async function Page({ params: { lang, slug } }) {
  const dictionary = await getDictionary(lang);
  const project = userProjects.filter((project) => {
    return project.id === slug;
  })[0];

  return (
    <>
      <Header
        title={dictionary.dialog.editProjectTitle}
        button={{
          id: "close",
          label: dictionary.dialog.closeWithoutSaving,
          icon: faXmark,
          action: {
            link: `/${lang}/projects/${slug}`,
          },
        }}
      />
      <section>
        <ProjectForm dictionary={dictionary} project={project} />
      </section>
    </>
  );
}
