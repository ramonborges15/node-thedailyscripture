import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateBibleBook1613093025323 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE bible_book (
                id serial NOT NULL,
                "name" varchar(64) NOT NULL,
                number_chapters int2 NOT NULL,
                testament int2 NOT NULL,
                CONSTRAINT pk_bible_book PRIMARY KEY (id)
            );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("bible_book");
    }

}
