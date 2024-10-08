import ThreadsPage from "@/app/ui/pages/threads";

export default function Page({ params: { lang } }) {
  console.log(lang);
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <ThreadsPage />
    </div>
  );
}
