import { Roboto_Condensed } from "next/font/google";
import type { Metadata } from "next";
import classnames from "classnames";

import "./globals.css";
import ImagesGrid from "@/components/ImagesGrid";

export const metadata: Metadata = {
  title: "Udemy course app",
  description:
    "Build a production Next.js and React 18 site, w/ server and client components, React 18 hooks and Next.js hooks, & more.",
};

const robotoFont = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

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
      <body
        className={classnames(
          robotoFont.className,
          "flex justify-center items-center min-h-screen"
        )}
      >
        <div className="w-[1000px] flex flex-col items-center py-4">
          <header className="w-full bg-slate-100 flex flex-col items-center py-10">
            <h1 className=" text-2xl mb-5 underline decoration-3 decoration-blue-400">
              DAVID CANDO MUSIC
            </h1>
            <ImagesGrid />
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
