-- CreateEnum
CREATE TYPE "TableStatusChangeTo" AS ENUM ('CLOSE', 'OPEN', 'INGAME');

-- CreateEnum
CREATE TYPE "TableTransit" AS ENUM ('IN', 'OUT');

-- CreateEnum
CREATE TYPE "TurnAction" AS ENUM ('DRAW', 'KNOCK');

-- CreateEnum
CREATE TYPE "DrawAction" AS ENUM ('KEEP', 'CAST');

-- CreateEnum
CREATE TYPE "CardSource" AS ENUM ('DECK', 'DISCARD_PILE');

-- CreateEnum
CREATE TYPE "CardSuit" AS ENUM ('SPADES', 'CLUBS', 'DIAMONDS', 'HEARTS');

-- CreateEnum
CREATE TYPE "CardName" AS ENUM ('ACE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN', 'JACK', 'QUEEN', 'KING', 'JOKER');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "games" (
    "id" TEXT NOT NULL,
    "tableId" TEXT NOT NULL,
    "playersId" TEXT[],
    "startedAt" TIMESTAMP(3) NOT NULL,
    "endedAt" TIMESTAMP(3),

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "players" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tables" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hostId" TEXT NOT NULL,
    "openedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" TIMESTAMP(3),

    CONSTRAINT "tables_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "player_table_transits" (
    "id" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "tableId" TEXT NOT NULL,
    "transitAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "transit" "TableTransit" NOT NULL,

    CONSTRAINT "player_table_transits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "turns" (
    "id" TEXT NOT NULL,
    "action" "TurnAction" NOT NULL,
    "playerId" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "drawId" TEXT NOT NULL,
    "discardId" TEXT NOT NULL,

    CONSTRAINT "turns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cuts" (
    "id" TEXT NOT NULL,
    "targetCardId" TEXT NOT NULL,
    "cutterId" TEXT NOT NULL,
    "turnId" TEXT NOT NULL,

    CONSTRAINT "cuts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cut_sources" (
    "id" TEXT NOT NULL,
    "cutId" TEXT NOT NULL,
    "gameCardId" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,

    CONSTRAINT "cut_sources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "draws" (
    "id" TEXT NOT NULL,
    "from" "CardSource" NOT NULL,
    "cardId" TEXT NOT NULL,

    CONSTRAINT "draws_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "discards" (
    "id" TEXT NOT NULL,
    "gameCardId" TEXT NOT NULL,
    "effectTargetId" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,

    CONSTRAINT "discards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "effects" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "effects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "effect_targets" (
    "id" TEXT NOT NULL,
    "effectId" TEXT NOT NULL,
    "activeTargetId" TEXT NOT NULL,
    "passiveTargetId" TEXT,

    CONSTRAINT "effect_targets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cards" (
    "id" TEXT NOT NULL,
    "suit" "CardSuit" NOT NULL,
    "name" "CardName" NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "table_statuses" (
    "id" TEXT NOT NULL,
    "tableId" TEXT NOT NULL,

    CONSTRAINT "table_statuses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "table_status_changes" (
    "id" TEXT NOT NULL,
    "tableStatusId" TEXT NOT NULL,
    "changeTo" "TableStatusChangeTo" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "table_status_changes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "player_hands" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,

    CONSTRAINT "player_hands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hand_cards" (
    "id" TEXT NOT NULL,
    "playerHandId" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "gameCardId" TEXT NOT NULL,

    CONSTRAINT "hand_cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_cards" (
    "id" TEXT NOT NULL,

    CONSTRAINT "game_cards_pkey" PRIMARY KEY ("id")
);

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
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "players_name_key" ON "players"("name");

-- CreateIndex
CREATE UNIQUE INDEX "players_userId_key" ON "players"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "tables_name_key" ON "tables"("name");

-- CreateIndex
CREATE UNIQUE INDEX "turns_drawId_key" ON "turns"("drawId");

-- CreateIndex
CREATE UNIQUE INDEX "turns_discardId_key" ON "turns"("discardId");

-- CreateIndex
CREATE UNIQUE INDEX "cut_sources_cutId_key" ON "cut_sources"("cutId");

-- CreateIndex
CREATE UNIQUE INDEX "discards_effectTargetId_key" ON "discards"("effectTargetId");

-- CreateIndex
CREATE UNIQUE INDEX "effect_targets_activeTargetId_key" ON "effect_targets"("activeTargetId");

-- CreateIndex
CREATE UNIQUE INDEX "effect_targets_passiveTargetId_key" ON "effect_targets"("passiveTargetId");

-- CreateIndex
CREATE UNIQUE INDEX "_GameToPlayer_AB_unique" ON "_GameToPlayer"("A", "B");

-- CreateIndex
CREATE INDEX "_GameToPlayer_B_index" ON "_GameToPlayer"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GameCardToPlayer_AB_unique" ON "_GameCardToPlayer"("A", "B");

-- CreateIndex
CREATE INDEX "_GameCardToPlayer_B_index" ON "_GameCardToPlayer"("B");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "tables"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "players" ADD CONSTRAINT "players_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tables" ADD CONSTRAINT "tables_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_table_transits" ADD CONSTRAINT "player_table_transits_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_table_transits" ADD CONSTRAINT "player_table_transits_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "tables"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turns" ADD CONSTRAINT "turns_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turns" ADD CONSTRAINT "turns_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turns" ADD CONSTRAINT "turns_drawId_fkey" FOREIGN KEY ("drawId") REFERENCES "draws"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turns" ADD CONSTRAINT "turns_discardId_fkey" FOREIGN KEY ("discardId") REFERENCES "discards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cuts" ADD CONSTRAINT "cuts_targetCardId_fkey" FOREIGN KEY ("targetCardId") REFERENCES "game_cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cuts" ADD CONSTRAINT "cuts_cutterId_fkey" FOREIGN KEY ("cutterId") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cuts" ADD CONSTRAINT "cuts_turnId_fkey" FOREIGN KEY ("turnId") REFERENCES "turns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cut_sources" ADD CONSTRAINT "cut_sources_cutId_fkey" FOREIGN KEY ("cutId") REFERENCES "cuts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cut_sources" ADD CONSTRAINT "cut_sources_gameCardId_fkey" FOREIGN KEY ("gameCardId") REFERENCES "game_cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cut_sources" ADD CONSTRAINT "cut_sources_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "draws" ADD CONSTRAINT "draws_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "game_cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "discards" ADD CONSTRAINT "discards_gameCardId_fkey" FOREIGN KEY ("gameCardId") REFERENCES "game_cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "discards" ADD CONSTRAINT "discards_effectTargetId_fkey" FOREIGN KEY ("effectTargetId") REFERENCES "effect_targets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "discards" ADD CONSTRAINT "discards_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "effect_targets" ADD CONSTRAINT "effect_targets_effectId_fkey" FOREIGN KEY ("effectId") REFERENCES "effects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "effect_targets" ADD CONSTRAINT "effect_targets_activeTargetId_fkey" FOREIGN KEY ("activeTargetId") REFERENCES "hand_cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "effect_targets" ADD CONSTRAINT "effect_targets_passiveTargetId_fkey" FOREIGN KEY ("passiveTargetId") REFERENCES "hand_cards"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "table_statuses" ADD CONSTRAINT "table_statuses_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "tables"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "table_status_changes" ADD CONSTRAINT "table_status_changes_tableStatusId_fkey" FOREIGN KEY ("tableStatusId") REFERENCES "table_statuses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_hands" ADD CONSTRAINT "player_hands_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_hands" ADD CONSTRAINT "player_hands_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hand_cards" ADD CONSTRAINT "hand_cards_playerHandId_fkey" FOREIGN KEY ("playerHandId") REFERENCES "player_hands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hand_cards" ADD CONSTRAINT "hand_cards_gameCardId_fkey" FOREIGN KEY ("gameCardId") REFERENCES "game_cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToPlayer" ADD CONSTRAINT "_GameToPlayer_A_fkey" FOREIGN KEY ("A") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToPlayer" ADD CONSTRAINT "_GameToPlayer_B_fkey" FOREIGN KEY ("B") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameCardToPlayer" ADD CONSTRAINT "_GameCardToPlayer_A_fkey" FOREIGN KEY ("A") REFERENCES "game_cards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameCardToPlayer" ADD CONSTRAINT "_GameCardToPlayer_B_fkey" FOREIGN KEY ("B") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE CASCADE;
