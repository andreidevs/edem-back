/*
  Warnings:

  - You are about to drop the column `indivId` on the `Students` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[studentId]` on the table `Indiv` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `studentId` to the `Indiv` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Students" DROP CONSTRAINT "Students_indivId_fkey";

-- AlterTable
ALTER TABLE "Indiv" ADD COLUMN     "studentId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Students" DROP COLUMN "indivId";

-- CreateIndex
CREATE UNIQUE INDEX "Indiv_studentId_key" ON "Indiv"("studentId");

-- AddForeignKey
ALTER TABLE "Indiv" ADD CONSTRAINT "Indiv_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
