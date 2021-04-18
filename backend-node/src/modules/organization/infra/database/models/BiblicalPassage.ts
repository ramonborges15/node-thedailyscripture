import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { BibleBook } from "./BibleBook";

@Entity("biblical_passage")
class BiblicalPassage {
    @PrimaryColumn()
    id: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @Column()
    chapter: number;

    @Column({ name: "verse_begin" })
    verseBegin: number;

    @Column({ name: "verse_end" })
    verseEnd: number;

    @Column('int4', { name: "bible_book_id" })
    bibleBookId: number;

    @ManyToOne(type => BibleBook)
    @JoinColumn({ name: "bible_book_id" })
    bibleBook: BibleBook;
}

export { BiblicalPassage }