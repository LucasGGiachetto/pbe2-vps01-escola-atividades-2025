-- CreateTable
CREATE TABLE `aluno` (
    `ra` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `aluno_ra_key`(`ra`),
    UNIQUE INDEX `aluno_email_key`(`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `atividade` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `aluno_ra` VARCHAR(191) NOT NULL,
    `data_inicio` DATETIME(3) NOT NULL,
    `data_entrega` DATETIME(3) NOT NULL,
    `nota` INTEGER NULL,
    `peso` DOUBLE NOT NULL,
    `parcial` DOUBLE NULL,

    UNIQUE INDEX `atividade_aluno_ra_key`(`aluno_ra`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `telefone` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `aluno_ra` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `telefone_aluno_ra_key`(`aluno_ra`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
