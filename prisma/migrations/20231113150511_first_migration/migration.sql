/*
  Warnings:

  - You are about to drop the column `userId` on the `Admin` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Admin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_Admin" ("email", "id", "name", "password") SELECT "email", "id", "name", "password" FROM "Admin";
DROP TABLE "Admin";
ALTER TABLE "new_Admin" RENAME TO "Admin";
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
