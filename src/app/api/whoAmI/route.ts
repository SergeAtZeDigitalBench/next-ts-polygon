import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const GET = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);

  return NextResponse.json({ name: session?.user?.name || "Not logged in" });
};
