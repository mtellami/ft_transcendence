-- AlterTable
ALTER TABLE "User" ADD COLUMN     "blocks" INTEGER[],
ADD COLUMN     "games" INTEGER DEFAULT 0,
ADD COLUMN     "score" INTEGER DEFAULT 0,
ADD COLUMN     "wins" INTEGER DEFAULT 0;
