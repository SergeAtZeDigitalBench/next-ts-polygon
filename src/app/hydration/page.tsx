import { dehydrate } from "@tanstack/query-core";
import getQueryClient from "@/providers/ReactQueryProvider/getQueryClient";
import Hydrate from "@/providers/ReactQueryProvider/Hydrate";
import UsersList from "./UsersList";
import { IUser } from "@/types";

async function getUsers() {
  const res = await fetch("http://localhost:3000/api/users");
  const users = (await res.json()) as IUser[];
  return users;
}

export default async function Hydration() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["hydrate-users"], getUsers);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <UsersList />
    </Hydrate>
  );
}
