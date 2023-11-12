import { MigrationInterface, QueryRunner } from "typeorm";

export class AutoGenerate1699829392585 implements MigrationInterface {
    name = 'AutoGenerate1699829392585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`volume\` (\`id\` int NOT NULL AUTO_INCREMENT, \`number\` int NOT NULL, \`language\` varchar(255) NOT NULL, \`price_discounted\` int NOT NULL, \`current_price\` int NOT NULL, \`thereIsDiscount\` tinyint NOT NULL, \`discountPercentual\` int NOT NULL, \`mangaId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`manga\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`volume\` ADD CONSTRAINT \`FK_5599dc52be845f18e2341b99b2c\` FOREIGN KEY (\`mangaId\`) REFERENCES \`manga\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`volume\` DROP FOREIGN KEY \`FK_5599dc52be845f18e2341b99b2c\``);
        await queryRunner.query(`DROP TABLE \`manga\``);
        await queryRunner.query(`DROP TABLE \`volume\``);
    }

}
