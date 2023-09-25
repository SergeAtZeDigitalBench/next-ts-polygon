import React from "react";
import { getServerSession } from "next-auth";

import { IPageProps } from "@/types";
import WhoAmIButton from "./WhoAmIButton";

const ServerActionPage = async ({ params, searchParams }: IPageProps) => {
  const whoAmI = async () => {
    "use server";
    const session = await getServerSession();

    return session?.user?.name || "Not logged in";
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Server action
      </h1>
      <WhoAmIButton whoAmIAction={whoAmI}>who am I?</WhoAmIButton>
    </>
  );
};

export default ServerActionPage;
