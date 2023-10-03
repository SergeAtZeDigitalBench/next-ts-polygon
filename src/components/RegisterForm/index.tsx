"use client";

import React, { useEffect } from "react";
import { redirect } from "next/navigation";

import { useFormState } from "@/lib/hooks/useFormState";
import { IServerActionResponse } from "@/types";

interface IProps {
  registerUserAction: (formData: FormData) => Promise<IServerActionResponse>;
}

const AuthForm = ({ registerUserAction }: IProps): JSX.Element => {
  const [state, serverAction] = useFormState({
    serverAction: registerUserAction,
  });

  useEffect(() => {
    if (state.message === "ok") {
      redirect("/login");
    }
  }, [state.message]);

  return (
    <form
      action={serverAction as unknown as string}
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
        area-disabled={state.pending ? true : undefined}
        className="px-2 py-1 rounded w-full bg-black text-white font-semibold"
      >
        register
      </button>

      {(state.message || state.error) && (
        <p aria-live="polite" className="sr-only" role="status">
          {state.message || state.error}
        </p>
      )}
    </form>
  );
};

export default AuthForm;
