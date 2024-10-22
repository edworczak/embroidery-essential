import { getDictionary } from "@/app/[lang]/dictionaries";
import {
  faArrowLeft,
  faBook,
  faHouse,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import IconButton from "@/app/ui/common/icon-button/icon-button";

type NavProps = {
  lang: string;
};

export default async function Nav({ lang }: NavProps) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="fixed bottom-0 w-full bg-white z-40 shadow-2xl">
      <section className="flex-row justify-end gap-4 py-5">
        <IconButton
          id="btn-nav-back"
          label={dictionary.nav.back}
          action={{ link: `/${lang}` }}
          icon={faArrowLeft}
          className="mr-auto"
        />
        <IconButton
          id="btn-nav-home"
          label={dictionary.nav.home}
          action={{ link: `/${lang}` }}
          icon={faHouse}
        />
        <IconButton
          id="btn-nav-projects"
          label={dictionary.nav.projects}
          action={{ link: `/${lang}/projects` }}
          icon={faBook}
        />
        <IconButton
          id="btn-nav-threads"
          label={dictionary.nav.threads}
          action={{ link: `/${lang}/threads` }}
          icon={faPalette}
        />
      </section>
    </div>
  );
}
