import { NextRequest, NextResponse } from "next/server";

import { readDb, serveMockData, logRequest } from "@/lib";
import { IPost } from "@/types";

export const GET = async (req: NextRequest) => {
  const [posts, error] = await readDb<IPost[]>("posts");

  if (error || !posts) {
    return new Response(null, {
      status: 500,
      statusText: error || "Not found",
    });
  }

  const delayedPosts = await serveMockData<IPost[]>({ data: posts });

  logRequest(req);

  return NextResponse.json(delayedPosts);
};
