-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "intraId" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "fullName" TEXT,
    "twoFactor" BOOLEAN NOT NULL DEFAULT false,
    "phoneNumber" INTEGER,
    "friends" INTEGER[],
    "blocks" INTEGER[],
    "games" INTEGER DEFAULT 0,
    "wins" INTEGER DEFAULT 0,
    "score" INTEGER DEFAULT 0,
    "online" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_intraId_key" ON "User"("intraId");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
