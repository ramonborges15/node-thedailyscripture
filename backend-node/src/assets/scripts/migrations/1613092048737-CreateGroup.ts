import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateGroup1613092048737 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "group" (
                id serial NOT NULL,
                created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
                "name" varchar(128) NOT NULL,
                CONSTRAINT pk_group PRIMARY KEY (id)
            );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("group")
    }

}
