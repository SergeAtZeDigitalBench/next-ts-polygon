import { getServerSession } from "next-auth";

import "./globals.css";
import Navigation from "@/components/Navigation";
import SessionProvider from "@/components/SessionProvider";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className=" bg-black text-white">
        <SessionProvider session={session}>
          <header>
            <Navigation />
          </header>
          <main className="max-w-screen-xl mx-auto">{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
