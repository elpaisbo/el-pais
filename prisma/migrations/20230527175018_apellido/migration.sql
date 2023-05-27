/*
  Warnings:

  - Added the required column `apellido` to the `Registro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Registro" ADD COLUMN     "apellido" TEXT NOT NULL;
