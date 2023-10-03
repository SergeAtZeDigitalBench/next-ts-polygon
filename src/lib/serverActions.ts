"use server";

import { IServerActionResponse } from "@/types";
import { addNewUser, areCredentialsValid } from "./api";

export const registerUserAction = async (
  formData: FormData
): Promise<IServerActionResponse> => {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!areCredentialsValid({ email, password })) {
      throw new Error("Missing credentials");
    }

    await addNewUser({ email, password });

    return { message: "ok" };
  } catch (err) {
    const error =
      err instanceof Error ? err.message || err.name : "Registration failed";
    return { error };
  }
};
