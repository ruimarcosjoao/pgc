-- CreateTable
CREATE TABLE "Pgc" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pgc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PgcSegundaCamada" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "camadaAcimaID" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PgcSegundaCamada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PgcTerceiraCamada" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "camadaAcimaID" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PgcTerceiraCamada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PgcQuartaCamada" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "camadaAcimaID" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PgcQuartaCamada_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pgc_name_key" ON "Pgc"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Pgc_code_key" ON "Pgc"("code");

-- CreateIndex
CREATE UNIQUE INDEX "PgcSegundaCamada_name_key" ON "PgcSegundaCamada"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PgcSegundaCamada_code_key" ON "PgcSegundaCamada"("code");

-- CreateIndex
CREATE UNIQUE INDEX "PgcTerceiraCamada_name_key" ON "PgcTerceiraCamada"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PgcTerceiraCamada_code_key" ON "PgcTerceiraCamada"("code");

-- CreateIndex
CREATE UNIQUE INDEX "PgcQuartaCamada_name_key" ON "PgcQuartaCamada"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PgcQuartaCamada_code_key" ON "PgcQuartaCamada"("code");

-- AddForeignKey
ALTER TABLE "PgcSegundaCamada" ADD CONSTRAINT "PgcSegundaCamada_camadaAcimaID_fkey" FOREIGN KEY ("camadaAcimaID") REFERENCES "Pgc"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PgcTerceiraCamada" ADD CONSTRAINT "PgcTerceiraCamada_camadaAcimaID_fkey" FOREIGN KEY ("camadaAcimaID") REFERENCES "PgcSegundaCamada"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PgcQuartaCamada" ADD CONSTRAINT "PgcQuartaCamada_camadaAcimaID_fkey" FOREIGN KEY ("camadaAcimaID") REFERENCES "PgcTerceiraCamada"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
