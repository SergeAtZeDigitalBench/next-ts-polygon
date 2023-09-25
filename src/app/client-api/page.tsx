"use client";

import { useState, useEffect } from "react";

import { IPageProps } from "@/types";

const ClientApiPage = ({ params, searchParams }: IPageProps) => {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    let mounted = true;
    const getWhoAmI = async () => {
      setName("");
      try {
        const res = await fetch("/api/whoAmI");
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = (await res.json()) as { name: string };
        mounted && setName(data.name);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    getWhoAmI();

    return () => {
      mounted = false;
    };
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        API from Client
      </h1>
      {name && <p className="text-center font-semibold my-2">You are {name}</p>}
    </>
  );
};

export default ClientApiPage;
