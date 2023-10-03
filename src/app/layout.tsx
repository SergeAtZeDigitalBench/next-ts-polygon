import { getServerSession } from "next-auth";

import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import SessionProvider from "@/components/SessionProvider";
import Navigation from "@/components/Navigation";
import "./globals.css";

type Props = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: Props) => {
  const session = await getServerSession(nextAuthOptions);

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider session={session}>
          <header>
            <Navigation />
          </header>
          <main className="max-w-screen-xl mx-auto">{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
