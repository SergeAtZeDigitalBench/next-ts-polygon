import { NextRequest, NextResponse } from "next/server";

import { readDb, serveMockData, logRequest } from "@/lib";
import { IUser } from "@/types";

export const GET = async (
  req: NextRequest,
  { params }: { params: { userId: string } }
) => {
  const { userId } = params;
  const [users, error] = await readDb<IUser[]>("users");

  if (error || !users) {
    return new Response(null, {
      status: 500,
      statusText: error || "Not found",
    });
  }

  const found = users.find((current) => current.id.toString() === userId);
  if (!found) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  const delayedUser = await serveMockData<IUser>({ data: found });

  logRequest(req);

  return NextResponse.json(delayedUser);
};
