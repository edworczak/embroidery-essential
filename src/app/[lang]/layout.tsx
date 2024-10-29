import type { Metadata } from "next";
import "../styles/globals.css";
import Nav from "@/app/ui/nav/nav";
import Image from "next/image";
import Homepage from "@/app/ui/pages/homepage";

export const metadata: Metadata = {
  title: "embroidery essential",
  description: "your handbook for embroidery projects",
};

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={lang}>
      <body className="antialiased">
        <div className="min-h-screen font-[family-name:var(--font-geist-sans)] pb-[90px]">
          <div className="fixed w-full h-full top-0 left-0 -z-10">
            <Image
              src="https://img.freepik.com/darmowe-wektory/akwarela-dostarcza-tlo_23-2150587447.jpg"
              alt="background"
              fill
              className="object-cover"
            />
          </div>
          {children}
        </div>
        <Nav lang={lang} />
      </body>
    </html>
  );
}
