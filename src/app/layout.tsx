import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Next.js Image Gallery",
  description: "Image gallery using pexel api and Next.js",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className="bg-black sticky top-0 z-10">
          <Navbar />
        </header>
        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
