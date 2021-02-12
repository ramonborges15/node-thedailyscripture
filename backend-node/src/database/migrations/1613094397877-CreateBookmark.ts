import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateBookmark1613094397877 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE bookmark (
                id serial NOT NULL,
                created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
                current_chapter int2 NOT NULL,
                begin_date timestamptz NOT NULL,
                end_date timestamptz NULL,
                reading_plan_id int4 NOT NULL,
                user_id int4 NOT NULL,
                bible_book_id int4 NOT NULL,
                CONSTRAINT pk_bookmark PRIMARY KEY (id)
            );
            
            
            -- bookmark foreign keys
            
            ALTER TABLE bookmark ADD CONSTRAINT fk_bookmark_bible_book FOREIGN KEY (bible_book_id) REFERENCES bible_book(id);
            ALTER TABLE bookmark ADD CONSTRAINT fk_bookmark_reading_plan FOREIGN KEY (reading_plan_id) REFERENCES reading_plan(id);
            ALTER TABLE bookmark ADD CONSTRAINT fk_bookmark_user FOREIGN KEY (user_id) REFERENCES "user"(id);`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("bookmark");
    }

}
