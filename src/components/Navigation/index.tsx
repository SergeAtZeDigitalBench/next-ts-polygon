"use client";

import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const AuthButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session.user?.name} <br />
        <button
          onClick={() => signOut()}
          className="px-2 py-1 rounded bg-red-500 hover:bg-red-600"
        >
          sign out
        </button>
      </>
    );
  }

  return (
    <>
      not signed in <br />
      <button
        onClick={() => signIn()}
        className="px-2 py-1 rounded bg-green-500 hover:bg-green-600"
      >
        sign in
      </button>
    </>
  );
};

interface IProps {
  [x: string]: unknown;
}

const Navigation = ({}: IProps): JSX.Element => {
  return (
    <nav className="flex gap-2 justify-end items-center py-4 px-2">
      <AuthButton />
    </nav>
  );
};

export default Navigation;
