/*
  Warnings:

  - You are about to drop the `PGC` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PgcSegundaCamada" DROP CONSTRAINT "PgcSegundaCamada_camadaAcimaID_fkey";

-- DropTable
DROP TABLE "PGC";

-- CreateTable
CREATE TABLE "Pgc" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pgc_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pgc_code_key" ON "Pgc"("code");

-- AddForeignKey
ALTER TABLE "PgcSegundaCamada" ADD CONSTRAINT "PgcSegundaCamada_camadaAcimaID_fkey" FOREIGN KEY ("camadaAcimaID") REFERENCES "Pgc"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
