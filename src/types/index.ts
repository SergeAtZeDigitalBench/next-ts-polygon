import { ReactNode } from "react";

export interface PageProps<
  P = Record<string, string>,
  Q = Record<string, string>
> {
  params: P;
  searchParams: Q;
}

export interface ParentProps {
  children: ReactNode;
}

export interface ICredentials {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  password: string;
  id: string;
}

export type IUserInfo = Pick<IUser, "id" | "email">;
