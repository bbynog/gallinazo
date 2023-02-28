/*
  Warnings:

  - You are about to drop the column `playerGameId` on the `cut_sources` table. All the data in the column will be lost.
  - You are about to drop the column `cutSourceId` on the `cuts` table. All the data in the column will be lost.
  - You are about to drop the column `playerGameId` on the `discards` table. All the data in the column will be lost.
  - You are about to drop the column `playerGameId` on the `turns` table. All the data in the column will be lost.
  - You are about to drop the `_GameCardToPlayerGame` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `player_games` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[cutId]` on the table `cut_sources` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `tables` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `playerId` to the `cut_sources` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playerId` to the `discards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playerId` to the `turns` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_GameCardToPlayerGame" DROP CONSTRAINT "_GameCardToPlayerGame_A_fkey";

-- DropForeignKey
ALTER TABLE "_GameCardToPlayerGame" DROP CONSTRAINT "_GameCardToPlayerGame_B_fkey";

-- DropForeignKey
ALTER TABLE "cut_sources" DROP CONSTRAINT "cut_sources_playerGameId_fkey";

-- DropForeignKey
ALTER TABLE "cuts" DROP CONSTRAINT "cuts_cutSourceId_fkey";

-- DropForeignKey
ALTER TABLE "cuts" DROP CONSTRAINT "cuts_cutterId_fkey";

-- DropForeignKey
ALTER TABLE "discards" DROP CONSTRAINT "discards_playerGameId_fkey";

-- DropForeignKey
ALTER TABLE "player_games" DROP CONSTRAINT "player_games_gameId_fkey";

-- DropForeignKey
ALTER TABLE "player_games" DROP CONSTRAINT "player_games_playerId_fkey";

-- DropForeignKey
ALTER TABLE "turns" DROP CONSTRAINT "turns_playerGameId_fkey";

-- DropIndex
DROP INDEX "cuts_cutSourceId_key";

-- AlterTable
ALTER TABLE "cut_sources" DROP COLUMN "playerGameId",
ADD COLUMN     "playerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "cuts" DROP COLUMN "cutSourceId";

-- AlterTable
ALTER TABLE "discards" DROP COLUMN "playerGameId",
ADD COLUMN     "playerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "games" ADD COLUMN     "playersId" TEXT[];

-- AlterTable
ALTER TABLE "turns" DROP COLUMN "playerGameId",
ADD COLUMN     "playerId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_GameCardToPlayerGame";

-- DropTable
DROP TABLE "player_games";

-- CreateTable
CREATE TABLE "_GameToPlayer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_GameCardToPlayer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GameToPlayer_AB_unique" ON "_GameToPlayer"("A", "B");

-- CreateIndex
CREATE INDEX "_GameToPlayer_B_index" ON "_GameToPlayer"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GameCardToPlayer_AB_unique" ON "_GameCardToPlayer"("A", "B");

-- CreateIndex
CREATE INDEX "_GameCardToPlayer_B_index" ON "_GameCardToPlayer"("B");

-- CreateIndex
CREATE UNIQUE INDEX "cut_sources_cutId_key" ON "cut_sources"("cutId");

-- CreateIndex
CREATE UNIQUE INDEX "tables_name_key" ON "tables"("name");

-- AddForeignKey
ALTER TABLE "turns" ADD CONSTRAINT "turns_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cuts" ADD CONSTRAINT "cuts_cutterId_fkey" FOREIGN KEY ("cutterId") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cut_sources" ADD CONSTRAINT "cut_sources_cutId_fkey" FOREIGN KEY ("cutId") REFERENCES "cuts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cut_sources" ADD CONSTRAINT "cut_sources_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "discards" ADD CONSTRAINT "discards_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToPlayer" ADD CONSTRAINT "_GameToPlayer_A_fkey" FOREIGN KEY ("A") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToPlayer" ADD CONSTRAINT "_GameToPlayer_B_fkey" FOREIGN KEY ("B") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameCardToPlayer" ADD CONSTRAINT "_GameCardToPlayer_A_fkey" FOREIGN KEY ("A") REFERENCES "game_cards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameCardToPlayer" ADD CONSTRAINT "_GameCardToPlayer_B_fkey" FOREIGN KEY ("B") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE CASCADE;
