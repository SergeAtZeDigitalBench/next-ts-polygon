import { redirect } from "next/navigation";

import { addNewUser, areCredentialsValid } from "./api";

export const registerUserAction = async (
  formData: FormData
): Promise<undefined | string> => {
  "use server";

  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!areCredentialsValid({ email, password })) {
      throw new Error("Missing credentials");
    }

    await addNewUser({ email, password });

    redirect("/login");
  } catch (error) {
    const msg =
      error instanceof Error
        ? error.message || error.name
        : "Registration failed";
    return msg;
  }
};
