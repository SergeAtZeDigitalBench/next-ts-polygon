"use client";

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import { Session } from "next-auth";

import { IParentProps } from "@/types";

interface IProps extends IParentProps {
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
