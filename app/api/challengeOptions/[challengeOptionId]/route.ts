import db from "@/db/drizzle";
import { challengeOptions } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (req: NextRequest, props: { params: Promise<{ challengeOptionId: string }> }) => {
  const { challengeOptionId } = await props.params;

  if (!challengeOptionId) {
    return new NextResponse("Challenge Option ID is missing", { status: 400 });
  }

  if (!getIsAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  const data = await db.query.challengeOptions.findFirst({
    where: eq(challengeOptions.id, Number(challengeOptionId)),
  });

  return NextResponse.json(data);
};

export const PUT = async (req: NextRequest, props: { params: Promise<{ challengeOptionId: string }> }) => {
  const { challengeOptionId } = await props.params;

  if (!challengeOptionId) {
    return new NextResponse("Challenge Option ID is missing", { status: 400 });
  }

  if (!getIsAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  const body = await req.json();
  const data = await db.update(challengeOptions).set({
    ...body,
  }).where(eq(challengeOptions.id, Number(challengeOptionId))).returning();

  return NextResponse.json(data[0]);
};

export const DELETE = async (req: NextRequest, props: { params: Promise<{ challengeOptionId: string }> }) => {
  const { challengeOptionId } = await props.params;

  if (!challengeOptionId) {
    return new NextResponse("Challenge Option ID is missing", { status: 400 });
  }

  if (!getIsAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  const data = await db.delete(challengeOptions)
    .where(eq(challengeOptions.id, Number(challengeOptionId))).returning();

  return NextResponse.json(data[0]);
};
