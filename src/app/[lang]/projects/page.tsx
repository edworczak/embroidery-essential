import ProjectsPage from "@/app/ui/pages/projects";

export default function Page({ params: { lang } }) {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <ProjectsPage lang={lang} />
    </div>
  );
}
