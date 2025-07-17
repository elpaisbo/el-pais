/*
  Warnings:

  - Added the required column `fecha_nacimiento` to the `Deuda` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Deuda" ADD COLUMN     "fecha_nacimiento" DATE NOT NULL;
