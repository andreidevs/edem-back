/*
  Warnings:

  - The `type` column on the `Groups` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Groups" DROP COLUMN "type",
ADD COLUMN     "type" TEXT NOT NULL DEFAULT E'Группа';

-- DropEnum
DROP TYPE "GroupTypes";
