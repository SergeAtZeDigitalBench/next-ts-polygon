import React from "react";
import Link from "next/link";

import AuthLinks from "@/components/AuthLinks";

const Navigation = (): JSX.Element => {
  return (
    <nav className="max-w-screen-xl mx-auto flex gap-2 justify-between p-4">
      <Link href="/">Home</Link>
      <AuthLinks />
    </nav>
  );
};

export default Navigation;
