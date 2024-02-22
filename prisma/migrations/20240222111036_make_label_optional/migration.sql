-- DropForeignKey
ALTER TABLE `Task` DROP FOREIGN KEY `Task_labelId_fkey`;

-- AlterTable
ALTER TABLE `Task` MODIFY `labelId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_labelId_fkey` FOREIGN KEY (`labelId`) REFERENCES `Label`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
