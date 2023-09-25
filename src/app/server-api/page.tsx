import React from "react";
import { headers } from "next/headers";

const fetchWhoAmI = async (): Promise<[string, null] | [null, string]> => {
  try {
    const res = await fetch("http://localhost:3000/api/whoAmI", {
      method: "GET",
      headers: headers(),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = (await res.json()) as { name: string };

    return [data.name, null];
  } catch (error) {
    return [null, "Failed to fetch"];
  }
};

import { IPageProps } from "@/types";

const ServerApiPage = async ({ params, searchParams }: IPageProps) => {
  const [name, err] = await fetchWhoAmI();

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        API from Server Component
      </h1>
      {name && <p className=" text-center font-semibold">You are {name}</p>}
      {err && (
        <p className=" text-center font-semibold text-red-600">Error: {err}</p>
      )}
    </>
  );
};

export default ServerApiPage;
