import ProjectsList from "@/app/ui/projects-list/projects-list";
import { getDictionary } from "@/app/[lang]/dictionaries";
import Header from "@/app/ui/common/header";
import ThreadsList from "@/app/ui/threads-list/threads-list";
import { user } from "@/app/data/user";

type HomepageProps = {
  lang: string;
};
export default async function Homepage({ lang }: HomepageProps) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Header title={`${dictionary.homepage.h1}, Ewa`} />
      <section>
        <ProjectsList lang={lang} finished={false} />
      </section>
      {user.shoppingList?.threads && (
        <>
          <Header title={dictionary.homepage.shopThreads} h2 />
          <section>
            <ThreadsList threadsArray={user.shoppingList.threads} />
          </section>
        </>
      )}
    </>
  );
}
