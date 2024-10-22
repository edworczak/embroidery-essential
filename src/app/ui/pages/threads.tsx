import ThreadsList from "@/app/ui/threads-list/threads-list";
import Header from "@/app/ui/common/header";
import { getDictionary } from "@/app/[lang]/dictionaries";

type ThreadsPageProps = {
  lang: string;
};

export default async function ThreadsPage({ lang }: ThreadsPageProps) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Header title={dictionary.threads.h1} />
      <section>
        <ThreadsList />
      </section>
    </>
  );
}
