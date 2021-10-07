/*
  Warnings:

  - Added the required column `name` to the `Students` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Students" DROP CONSTRAINT "Students_groupId_fkey";

-- AlterTable
ALTER TABLE "Students" ADD COLUMN     "name" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Students" ADD CONSTRAINT "Students_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;
