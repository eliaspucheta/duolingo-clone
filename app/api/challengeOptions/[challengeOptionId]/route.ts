import db from "@/db/drizzle";
import { challengeOptions } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { NextRequest } from 'next/server';  // Asegúrate de importar NextRequest

// Función GET
export const GET = async (req: NextRequest, { params }: { params: { challengeOptionId: string } }) => {
  const { challengeOptionId } = params;

  // Verificar si el parámetro challengeOptionId está presente
  if (!challengeOptionId) {
    return new NextResponse("Challenge Option ID is missing", { status: 400 });
  }

  // Verificar si el usuario es admin
  if (!getIsAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  // Realizar la consulta
  const data = await db.query.challengeOptions.findFirst({
    where: eq(challengeOptions.id, Number(challengeOptionId)), // Convertir challengeOptionId a número
  });

  return NextResponse.json(data);
};

// Función PUT
export const PUT = async (req: NextRequest, { params }: { params: { challengeOptionId: string } }) => {
  const { challengeOptionId } = params;

  // Verificar si el parámetro challengeOptionId está presente
  if (!challengeOptionId) {
    return new NextResponse("Challenge Option ID is missing", { status: 400 });
  }

  // Verificar si el usuario es admin
  if (!getIsAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  const body = await req.json();
  const data = await db.update(challengeOptions).set({
    ...body,
  }).where(eq(challengeOptions.id, Number(challengeOptionId))).returning();

  return NextResponse.json(data[0]);
};

// Función DELETE
export const DELETE = async (req: NextRequest, { params }: { params: { challengeOptionId: string } }) => {
  const { challengeOptionId } = params;

  // Verificar si el parámetro challengeOptionId está presente
  if (!challengeOptionId) {
    return new NextResponse("Challenge Option ID is missing", { status: 400 });
  }

  // Verificar si el usuario es admin
  if (!getIsAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  const data = await db.delete(challengeOptions)
    .where(eq(challengeOptions.id, Number(challengeOptionId))).returning();

  return NextResponse.json(data[0]);
};
