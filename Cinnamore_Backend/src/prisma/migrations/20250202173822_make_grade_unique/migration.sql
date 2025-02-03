/*
  Warnings:

  - A unique constraint covering the columns `[grade]` on the table `Pricing` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Pricing_grade_key` ON `Pricing`(`grade`);
