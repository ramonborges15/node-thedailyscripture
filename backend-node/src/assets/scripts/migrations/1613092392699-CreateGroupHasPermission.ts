import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateGroupHasPermission1613092392699 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE group_has_permission (
                id int4 NOT NULL,
                group_id int4 NOT NULL,
                permission_id int4 NOT NULL,
                
                CONSTRAINT pk_group_has_permission PRIMARY KEY (id)
            );
            
            -- group_has_permission foreign keys
            
            ALTER TABLE group_has_permission ADD CONSTRAINT fk_group_has_permission_group FOREIGN KEY (group_id) REFERENCES "group"(id);
            ALTER TABLE group_has_permission ADD CONSTRAINT fk_group_has_permission_permission FOREIGN KEY (permission_id) REFERENCES permission(id);`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("group_has_permission");
    }

}
