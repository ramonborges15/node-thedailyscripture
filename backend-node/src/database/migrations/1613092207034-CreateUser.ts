import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUser1613092207034 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "user" (
                id serial NOT NULL,
                created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
                "name" varchar(128) NOT NULL,
                email varchar(255) NOT NULL,
                "password" varchar(255) NOT NULL,
                group_id int4 NOT NULL,
                CONSTRAINT pk_user PRIMARY KEY (id)
            );
            
            
            -- "user" foreign keys
            
            ALTER TABLE "user" ADD CONSTRAINT fk_user_group FOREIGN KEY (group_id) REFERENCES dbthedailyscripture."group"(id);`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user");
    }

}
