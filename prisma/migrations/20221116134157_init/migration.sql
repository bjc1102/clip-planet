/*
  Warnings:

  - You are about to drop the column `content` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `done` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Site` table. All the data in the column will be lost.
  - Added the required column `ogDescription` to the `Site` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ogImage` to the `Site` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ogTitle` to the `Site` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ogUrl` to the `Site` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Site` DROP COLUMN `content`,
    DROP COLUMN `done`,
    DROP COLUMN `title`,
    ADD COLUMN `ogDescription` VARCHAR(191) NOT NULL,
    ADD COLUMN `ogImage` VARCHAR(191) NOT NULL,
    ADD COLUMN `ogTitle` VARCHAR(191) NOT NULL,
    ADD COLUMN `ogUrl` VARCHAR(191) NOT NULL;
