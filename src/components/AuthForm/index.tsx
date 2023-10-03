"use client";

import React from "react";
import { signIn } from "next-auth/react";

interface IProps {
  registerUserAction?: (formData: FormData) => Promise<undefined | string>;
}

const AuthForm = ({ registerUserAction }: IProps): JSX.Element => {
  const isRegister = !!registerUserAction;

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
      action={
        isRegister ? (registerUserAction as unknown as string) : undefined
      }
      onSubmit={!isRegister ? onSubmit : undefined}
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
        {isRegister ? "register" : "login"}
      </button>
    </form>
  );
};

export default AuthForm;
