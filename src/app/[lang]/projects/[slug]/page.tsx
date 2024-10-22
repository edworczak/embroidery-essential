import { userProjects } from "@/app/data/user-projects";
import ProjectPage from "@/app/ui/pages/project";

export default function Page({ params: { lang, slug } }) {
  const project = userProjects.filter((project) => {
    return project.id === slug;
  })[0];

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <ProjectPage lang={lang} project={project} />
    </div>
  );
}
