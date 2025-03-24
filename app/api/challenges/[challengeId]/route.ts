import db from "@/db/drizzle";
import { challenges } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (
  req: NextRequest,
  props: { params: Promise<{ challengeId: number }> }) => {
  const { challengeId } = await props.params;

  if(!getIsAdmin()) {
    return new NextResponse("Unhautorized", { status: 403 });
  }

  const data = await db.query.challenges.findFirst({
    where: eq(challenges.id, challengeId),
  });

  return NextResponse.json(data);
};

export const PUT = async (
  req: NextRequest,
  props: { params: Promise<{ challengeId: number }> },
) => {
  const { challengeId } = await props.params;
  if(!getIsAdmin()) {
    return new NextResponse("Unhautorized", { status: 403 });
  }

  const body = await req.json();
  const data = await db.update(challenges).set({
    ...body,
  }).where(eq(challenges.id, challengeId)).returning();

  return NextResponse.json(data[0]);
};

export const DELETE = async (
  req: NextRequest,
  props : { params: Promise<{ challengeId: number }> },
) => {
  const { challengeId } = await props.params;
  if(!getIsAdmin()) {
    return new NextResponse("Unhautorized", { status: 403 });
  }

  const data = await db.delete(challenges)
    .where(eq(challenges.id, challengeId)).returning();

  return NextResponse.json(data[0]);
};