-- DropForeignKey
ALTER TABLE "Daily" DROP CONSTRAINT "Daily_groupId_fkey";

-- DropForeignKey
ALTER TABLE "Daily" DROP CONSTRAINT "Daily_indivId_fkey";

-- DropForeignKey
ALTER TABLE "Expenses" DROP CONSTRAINT "Expenses_hallId_fkey";

-- DropForeignKey
ALTER TABLE "Payments" DROP CONSTRAINT "Payments_hallId_fkey";

-- DropForeignKey
ALTER TABLE "Students" DROP CONSTRAINT "Students_groupId_fkey";

-- DropForeignKey
ALTER TABLE "Students" DROP CONSTRAINT "Students_indivId_fkey";

-- AlterTable
ALTER TABLE "Daily" ALTER COLUMN "groupId" DROP NOT NULL,
ALTER COLUMN "indivId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Expenses" ALTER COLUMN "hallId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Payments" ALTER COLUMN "hallId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Students" ALTER COLUMN "groupId" DROP NOT NULL,
ALTER COLUMN "indivId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Students" ADD CONSTRAINT "Students_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Groups"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Students" ADD CONSTRAINT "Students_indivId_fkey" FOREIGN KEY ("indivId") REFERENCES "Indiv"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_hallId_fkey" FOREIGN KEY ("hallId") REFERENCES "Hall"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Daily" ADD CONSTRAINT "Daily_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Groups"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Daily" ADD CONSTRAINT "Daily_indivId_fkey" FOREIGN KEY ("indivId") REFERENCES "Indiv"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expenses" ADD CONSTRAINT "Expenses_hallId_fkey" FOREIGN KEY ("hallId") REFERENCES "Hall"("id") ON DELETE SET NULL ON UPDATE CASCADE;
