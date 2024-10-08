import { userProjects } from "@/app/data/user-projects";

export default function Page({ params: { lang, slug } }) {
  const project = userProjects.filter((project) => {
    return project.id === slug;
  })[0];

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <h1>{project.name}</h1>
    </div>
  );
}
