"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

interface IProps {
  [x: string]: unknown;
}

const AuthLinks = ({}: IProps): JSX.Element => {
  const { data: session, status } = useSession();

  if (status !== "authenticated") {
    return (
      <ul className="flex gap-2">
        <li>Hi Guest!</li>
        <li>
          <Link href="/register">register</Link>
        </li>
        <li>
          <Link href="/login">login</Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="flex gap-2">
      <li>Hi {session.user?.email || "Guest"}!</li>
      <li>
        <button onClick={() => signOut({ callbackUrl: "/" })}>logout</button>
      </li>
    </ul>
  );
};

export default AuthLinks;
