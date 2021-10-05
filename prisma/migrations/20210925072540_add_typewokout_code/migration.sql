/*
  Warnings:

  - Added the required column `code` to the `TypeWorkout` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TypeWorkout" ADD COLUMN     "code" TEXT NOT NULL;
