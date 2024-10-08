import type { Metadata } from "next";
import "../styles/globals.css";
import Nav from "@/app/ui/nav/nav";

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
        {children}
        <Nav lang={lang} />
      </body>
    </html>
  );
}
