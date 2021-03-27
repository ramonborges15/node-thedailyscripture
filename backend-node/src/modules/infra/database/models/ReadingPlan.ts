import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("reading_plan")
class ReadingPlan {
    
    @PrimaryColumn()
    id: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ name: "url_img" })
    urlImg: string;

}

export { ReadingPlan }