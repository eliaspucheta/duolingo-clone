import db from "@/db/drizzle";
import { units } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (req: NextRequest, props: { params: Promise<{ unitId: number }> }) => {
  const { unitId } = await props.params;

  if(!getIsAdmin()) {
    return new NextResponse("Unhautorized", { status: 403 });
  }

  const data = await db.query.courses.findFirst({
    where: eq(units.id, unitId),
  });

  return NextResponse.json(data);
};

export const PUT = async (req: NextRequest, props: { params: Promise<{ unitId: number }> }) => {
  const { unitId } = await props.params;

  if(!getIsAdmin()) {
    return new NextResponse("Unhautorized", { status: 403 });
  }

  const body = await req.json();
  const data = await db.update(units).set({
    ...body,
  }).where(eq(units.id, unitId)).returning();

  return NextResponse.json(data[0]);
};

export const DELETE = async (req: NextRequest, props: { params: Promise<{ unitId: number }> }) => {
  const { unitId } = await props.params;

  if(!getIsAdmin()) {
    return new NextResponse("Unhautorized", { status: 403 });
  }

  const data = await db.delete(units)
    .where(eq(units.id, unitId)).returning();

  return NextResponse.json(data[0]);
};