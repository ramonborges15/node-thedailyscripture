import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertGroups1617393621987 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO public.group(id, created_at, updated_at, name)
            VALUES (1, current_date, current_date, 'admin_user');
            
            INSERT INTO public.group(id, created_at, updated_at, name)
            VALUES (2, current_date, current_date, 'normal_user');`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
