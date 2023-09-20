"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";

import UserCard from "@/components/UserCard";
import { IUser } from "@/types";

async function getUsers() {
  const res = await fetch("http://localhost:3000/api/users");
  const users = (await res.json()) as IUser[];
  return users;
}

export default function ListUsers() {
  const [count, setCount] = React.useState(0);

  const { data } = useQuery({
    queryKey: ["hydrate-users"],
    queryFn: () => getUsers(),
  });

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h4 style={{ marginBottom: 16 }}>{count}</h4>
        <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
        <button
          onClick={() => setCount((prev) => prev - 1)}
          style={{ marginInline: 16 }}
        >
          decrement
        </button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>

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
    </main>
  );
}
