-- CreateTable
CREATE TABLE "Acciones" (
    "id" SERIAL NOT NULL,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "Acciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registro" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "nacionalidad" TEXT NOT NULL,
    "domicilio" TEXT NOT NULL,
    "idcompra" TEXT NOT NULL,
    "acciones" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "adquisicion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "telefono" TEXT NOT NULL,
    "ci" TEXT NOT NULL,

    CONSTRAINT "Registro_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Registro_idcompra_key" ON "Registro"("idcompra");
