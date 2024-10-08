import ProjectsPage from '@/app/ui/pages/projects';
import { getDictionary } from '@/app/[lang]/dictionaries';

export default async function Home({ params: {lang}}) {
  const dictionary = await getDictionary(lang);
  console.log(dictionary)
    return (
        <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
            <ProjectsPage lang={lang}/>
        </div>
    );
}
