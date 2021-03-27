import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatePermission1613092316148 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "permission" (
                id serial NOT NULL,
                created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
                "name" varchar(255) NOT NULL,
                url varchar(255) NOT NULL,
                CONSTRAINT pk_permission PRIMARY KEY (id)
            );`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("permission");
    }

}
