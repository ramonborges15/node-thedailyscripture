import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateReadingPlanHasBiblicalPassage1613093646350 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE reading_plan_has_biblical_passage (
                order_passage int2 NOT NULL,
                reading_plan_id int4 NOT NULL,
                biblical_passage_id int4 NOT NULL
            );
            
            -- reading_plan_has_biblical_passage foreign keys
            
            ALTER TABLE reading_plan_has_biblical_passage ADD CONSTRAINT fk_reading_plan_has_biblical_passage_biblical_passage FOREIGN KEY (biblical_passage_id) REFERENCES biblical_passage(id);
            ALTER TABLE reading_plan_has_biblical_passage ADD CONSTRAINT fk_reading_plan_has_biblical_passage_reading_plan FOREIGN KEY (reading_plan_id) REFERENCES reading_plan(id);`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("reading_plan_has_biblical_passage");
    }

}
