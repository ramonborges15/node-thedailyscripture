import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateReadingPlan1613093528660 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE reading_plan (
                id serial NOT NULL,
                created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
                "name" varchar(128) NOT NULL,
                description text NOT NULL,
                url_img text NULL,
                CONSTRAINT pk_reading_plan PRIMARY KEY (id)
            );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("reading_plan");
    }

}
