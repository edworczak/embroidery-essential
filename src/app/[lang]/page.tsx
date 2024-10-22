import Homepage from "@/app/ui/pages/homepage";

export default function Home({ params: { lang } }) {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Homepage lang={lang} />
    </div>
  );
}
