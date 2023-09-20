import { NextRequest, NextResponse } from "next/server";

import { readDb, serveMockData, logRequest } from "@/lib";
import { IUser } from "@/types";

export const GET = async (req: NextRequest) => {
  const [users, error] = await readDb<IUser[]>("users");

  if (error || !users) {
    return new Response(null, {
      status: 500,
      statusText: error || "Not found",
    });
  }

  const shortUsers = users.map(({ id, username, email, website }) => ({
    id,
    username,
    email,
    website,
  }));
  const delayedShortUsers = await serveMockData<
    Pick<IUser, "id" | "username" | "email" | "website">[]
  >({ data: shortUsers });

  logRequest(req);

  return NextResponse.json(delayedShortUsers);
};
