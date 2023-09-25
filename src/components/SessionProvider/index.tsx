"use client";

import { ReactNode } from "react";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import { Session } from "next-auth";

interface IProps {
  children: ReactNode;
  session: Session | null;
}

const SessionProvider = ({ children, session }: IProps): JSX.Element => {
  return (
    <NextAuthSessionProvider session={session}>
      {children}
    </NextAuthSessionProvider>
  );
};

export default SessionProvider;
