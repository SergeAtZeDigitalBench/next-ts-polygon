"use client";

import React from "react";
import { signIn } from "next-auth/react";

const AuthForm = (): JSX.Element => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      callbackUrl: "/",
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-2 mx-auto mt-10 max-w-md"
    >
      <input
        type="email"
        name="email"
        className="border border-black px-2 py-1 rounded"
      />
      <input
        type="password"
        name="password"
        className="border border-black px-2 py-1 rounded"
      />
      <button
        type="submit"
        className="px-2 py-1 rounded w-full bg-black text-white font-semibold"
      >
        login
      </button>
    </form>
  );
};

export default AuthForm;
