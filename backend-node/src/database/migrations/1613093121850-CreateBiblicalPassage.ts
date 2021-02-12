import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateBiblicalPassage1613093121850 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE biblical_passage (
                id serial NOT NULL,
                created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
                chapter int2 NOT NULL,
                verse_begin int2 NOT NULL,
                verse_end int2 NOT NULL,
                bible_book_id int4 NOT NULL,
                CONSTRAINT pk_biblical_passage PRIMARY KEY (id)
            );
            
            
            -- biblical_passage foreign keys
            
            ALTER TABLE biblical_passage ADD CONSTRAINT fk_bookmark_bible_book FOREIGN KEY (bible_book_id) REFERENCES bible_book(id);`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("biblical_passage");
    }

}
