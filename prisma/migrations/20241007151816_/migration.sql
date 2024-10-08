/*
  Warnings:

  - You are about to drop the `Ducument` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Ducument";

-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);
