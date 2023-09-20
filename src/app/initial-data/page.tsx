import UsersList from "./UsersList";
import { IUser } from "@/types";

async function getUsers() {
  const res = await fetch("http://localhost:3000/api/users");
  const users = (await res.json()) as IUser[];
  return users;
}

export default async function InitialData() {
  const users = await getUsers();

  return <UsersList users={users} />;
}
