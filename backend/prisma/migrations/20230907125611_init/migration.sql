-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatar" TEXT NOT NULL DEFAULT 'avatar.png',
ADD COLUMN     "friends" INTEGER[];
