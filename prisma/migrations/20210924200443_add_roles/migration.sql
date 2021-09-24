-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'COACH');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "roles" "Role" NOT NULL DEFAULT E'COACH';
