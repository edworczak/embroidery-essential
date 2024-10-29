import { getDictionary } from "@/app/[lang]/dictionaries";
import ProjectForm from "@/app/ui/project-form/project-form";
import Header from "@/app/ui/common/header";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default async function Page({ params: { lang } }) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header
        title={dictionary.dialog.newProjectTitle}
        button={{
          id: "close",
          label: dictionary.dialog.closeWithoutSaving,
          icon: faXmark,
          action: {
            link: `/${lang}/projects`,
          },
        }}
      />
      <section>
        <ProjectForm dictionary={dictionary} />
      </section>
    </>
  );
}
