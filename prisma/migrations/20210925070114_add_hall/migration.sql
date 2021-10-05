/*
  Warnings:

  - Added the required column `hallId` to the `Daily` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hallId` to the `Expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hallId` to the `Groups` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hallId` to the `Indiv` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hallId` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hallId` to the `Students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Daily" ADD COLUMN     "hallId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Expenses" ADD COLUMN     "hallId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Groups" ADD COLUMN     "hallId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Indiv" ADD COLUMN     "hallId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Payments" ADD COLUMN     "hallId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Students" ADD COLUMN     "hallId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Hall" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Hall_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HallToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_HallToUser_AB_unique" ON "_HallToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_HallToUser_B_index" ON "_HallToUser"("B");

-- AddForeignKey
ALTER TABLE "Groups" ADD CONSTRAINT "Groups_hallId_fkey" FOREIGN KEY ("hallId") REFERENCES "Hall"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Students" ADD CONSTRAINT "Students_hallId_fkey" FOREIGN KEY ("hallId") REFERENCES "Hall"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_hallId_fkey" FOREIGN KEY ("hallId") REFERENCES "Hall"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Daily" ADD CONSTRAINT "Daily_hallId_fkey" FOREIGN KEY ("hallId") REFERENCES "Hall"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Indiv" ADD CONSTRAINT "Indiv_hallId_fkey" FOREIGN KEY ("hallId") REFERENCES "Hall"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expenses" ADD CONSTRAINT "Expenses_hallId_fkey" FOREIGN KEY ("hallId") REFERENCES "Hall"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HallToUser" ADD FOREIGN KEY ("A") REFERENCES "Hall"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HallToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
