/*
  Warnings:

  - You are about to drop the column `hallId` on the `Daily` table. All the data in the column will be lost.
  - You are about to drop the column `hallId` on the `Students` table. All the data in the column will be lost.
  - Added the required column `indivId` to the `Students` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Daily" DROP CONSTRAINT "Daily_hallId_fkey";

-- DropForeignKey
ALTER TABLE "Students" DROP CONSTRAINT "Students_hallId_fkey";

-- AlterTable
ALTER TABLE "Daily" DROP COLUMN "hallId";

-- AlterTable
ALTER TABLE "Students" DROP COLUMN "hallId",
ADD COLUMN     "indivId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Students" ADD CONSTRAINT "Students_indivId_fkey" FOREIGN KEY ("indivId") REFERENCES "Indiv"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
