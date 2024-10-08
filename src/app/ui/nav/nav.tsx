import Link from 'next/link';
import { getDictionary } from '@/app/[lang]/dictionaries';

type NavProps = {
  lang: string;
}

export default async function Nav({lang}: NavProps) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="fixed flex justify-center gap-4 bottom-0 w-full bg-white p-4 z-40 shadow-2xl">
      <Link href={`/${lang}`}>{dictionary.nav.projects}</Link>
      <Link href={`/${lang}/threads`}>{dictionary.nav.threads}</Link>
    </div>
  );
}