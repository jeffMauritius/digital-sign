"use server"
import { prisma } from "@/lib/prisma";

export async function createDocument({ name, status }: { name: string; status: string }) {
  return await prisma.document.create({
    data: { 
      name,
      status,
    },
  });
}
