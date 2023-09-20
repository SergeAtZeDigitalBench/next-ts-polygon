"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import Image from "next/image";

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
            <div
              key={user.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >
              <Image
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                width={180}
                height={180}
                className="mx-auto"
              />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      }
    </>
  );
}
