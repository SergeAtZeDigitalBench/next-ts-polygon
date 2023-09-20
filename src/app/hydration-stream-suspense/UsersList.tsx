"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";

import UserCard from "@/components/UserCard";
import { IUser } from "@/types";

async function getUsers() {
  return (await fetch("http://localhost:3000/api/users").then((res) =>
    res.json()
  )) as IUser[];
}

export default function ListUsers() {
  const [count, setCount] = React.useState(0);
  const { data } = useQuery<IUser[]>({
    queryKey: ["stream-hydrate-users"],
    queryFn: () => getUsers(),
    suspense: true,
    staleTime: 5 * 1000,
  });

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <p>{count}</p>
      {
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {data?.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      }
    </>
  );
}
