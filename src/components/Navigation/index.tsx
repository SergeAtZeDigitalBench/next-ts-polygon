"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

import { navLinks } from "@/constants";

const ACTIVE_ROUTE_STYLE = "px-2 py-1 rounded text-gray-300 bg-gray-700";
const ROUTE_STYLE = "px-2 py-1 rounded text-gray-500 hover:bg-gray-700";

const AuthButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Hi, {session.user?.name} !<br />
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
      Hi Guest! <br />
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
  const patname = usePathname();

  return (
    <nav className="flex gap-2 justify-between items-center py-4 px-2">
      <ul className="flex gap-2">
        {navLinks.map(({ id, href, name }) => (
          <li key={id}>
            <Link
              href={href}
              className={patname === href ? ACTIVE_ROUTE_STYLE : ROUTE_STYLE}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <AuthButton />
      </div>
    </nav>
  );
};

export default Navigation;
