import bcrypt from "bcrypt";

import { ICredentials } from "@/types";
import { db } from "./db";
import { isEmpty } from "./common";

export const findUserByEmail = async (email: string) => {
  return await db.user.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      password: true,
    },
  });
};

export const addNewUser = async ({ email, password }: ICredentials) => {
  const hashedPw = await bcrypt.hash(password, 10);

  const created = await db.user.create({
    data: { email, password: hashedPw },
    select: {
      id: true,
      email: true,
      password: true,
    },
  });

  return created;
};

export const verifyUserCredentials = async (credentials?: ICredentials) => {
  if (!credentials) return null;
  const { email, password } = credentials;

  const userFound = await findUserByEmail(email);
  if (!userFound) {
    return null;
  }

  const isValid = await bcrypt.compare(password, userFound.password);
  if (!isValid) {
    return null;
  }

  return { id: userFound.id, email: userFound.email };
};

export const areCredentialsValid = (credentials?: Partial<ICredentials>) => {
  if (!credentials) return false;

  return !isEmpty(credentials.email) && !isEmpty(credentials.password);
};
