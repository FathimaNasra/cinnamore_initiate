/*
  Warnings:

  - You are about to drop the column `unitPrice` on the `pricing` table. All the data in the column will be lost.
  - Added the required column `maxPrice` to the `Pricing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minPrice` to the `Pricing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pricing` DROP COLUMN `unitPrice`,
    ADD COLUMN `maxPrice` DOUBLE NOT NULL,
    ADD COLUMN `minPrice` DOUBLE NOT NULL;
