import { userProjects } from "@/app/data/user-projects";
import ProjectPage from "@/app/ui/pages/project";

export default function Page({ params: { lang, slug } }) {
  const project = userProjects.filter((project) => {
    return project.id === slug;
  })[0];

  return <ProjectPage lang={lang} project={project} />;
}
