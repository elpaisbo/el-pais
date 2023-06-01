-- CreateTable
CREATE TABLE "Deuda" (
    "id" SERIAL NOT NULL,
    "idDeuda" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "nacionalidad" TEXT NOT NULL,
    "domicilio" TEXT NOT NULL,
    "idcompra" TEXT NOT NULL,
    "acciones" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "adquisicion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "telefono" TEXT NOT NULL,
    "ci" TEXT NOT NULL,

    CONSTRAINT "Deuda_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Deuda_idDeuda_key" ON "Deuda"("idDeuda");

-- CreateIndex
CREATE UNIQUE INDEX "Deuda_idcompra_key" ON "Deuda"("idcompra");
