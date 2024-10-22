import ProjectsList from "@/app/ui/projects-list/projects-list";
import { getDictionary } from "@/app/[lang]/dictionaries";

type HomepageProps = {
  lang: string;
};
export default async function Homepage({ lang }: HomepageProps) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <section>
        <h1>{`${dictionary.homepage.h1}, Ewa`}</h1>
      </section>
      <section>
        <ProjectsList lang={lang} finished={false} />
      </section>
    </>
  );
}
