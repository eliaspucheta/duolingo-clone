import db from "@/db/drizzle";
import { units } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ unitId: string }> }
) => {
  const { unitId } = await params;
  const parsedUnitId = parseInt(unitId, 10);

  if (isNaN(parsedUnitId)) {
    return new NextResponse("Invalid unitId", { status: 400 });
  }

  if (!getIsAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  const data = await db.query.units.findFirst({
    where: eq(units.id, parsedUnitId),
  });

  if (!data) {
    return new NextResponse("Unit not found", { status: 404 });
  }

  return NextResponse.json(data);
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: Promise<{ unitId: string }> }
) => {
  const { unitId } = await params;
  const parsedUnitId = parseInt(unitId, 10);

  if (isNaN(parsedUnitId)) {
    return new NextResponse("Invalid unitId", { status: 400 });
  }

  if (!getIsAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  const body = await req.json();
  const data = await db
    .update(units)
    .set({
      ...body,
    })
    .where(eq(units.id, parsedUnitId))
    .returning();

  return data.length > 0
    ? NextResponse.json(data[0])
    : new NextResponse("Unit not found", { status: 404 });
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<{ unitId: string }> }
) => {
  const { unitId } = await params;
  const parsedUnitId = parseInt(unitId, 10);

  if (isNaN(parsedUnitId)) {
    return new NextResponse("Invalid unitId", { status: 400 });
  }

  if (!getIsAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  const data = await db
    .delete(units)
    .where(eq(units.id, parsedUnitId))
    .returning();

  return data.length > 0
    ? NextResponse.json(data[0])
    : new NextResponse("Unit not found", { status: 404 });
};
