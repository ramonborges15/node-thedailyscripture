import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("bible_book")
class BibleBook {

    @PrimaryColumn()
    id: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @Column()
    name: string;

    @Column({ name: "number_chapters"})
    numberChapters: number;

    @Column()
    testament: number;
}

export { BibleBook }