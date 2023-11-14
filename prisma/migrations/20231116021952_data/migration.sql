/*
  Warnings:

  - Added the required column `data` to the `Chessboard` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Chessboard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" TEXT NOT NULL
);
INSERT INTO "new_Chessboard" ("id") SELECT "id" FROM "Chessboard";
DROP TABLE "Chessboard";
ALTER TABLE "new_Chessboard" RENAME TO "Chessboard";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
