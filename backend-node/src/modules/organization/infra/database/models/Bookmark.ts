import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { BibleBook } from "./BibleBook";
import { ReadingPlan } from "./ReadingPlan";
import { User } from "./User";

@Entity("bookmark")
class Bookmark {

    @PrimaryColumn()
    id: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @Column({ name: "current_chapter" })
    currentChapter: number;

    @Column({ name: "begin_date" })
    beginDate: Date;

    @Column({ name: "end_date" })
    endDate: Date;

    @Column('int4', { name: "reading_plan_id" })
    readingPlanId: number;

    @ManyToOne(type => ReadingPlan)
    @JoinColumn({ name: "reading_plan_id"})
    readingPlan: ReadingPlan;
    
    @Column('int4', { name: "user_id" })
    userId: number;

    @ManyToOne(type => User)
    @JoinColumn({ name: "user_id"})
    user: User;
    
    @Column('int4', { name: "bible_book_id" })
    bibleBookId: number;

    @ManyToOne(type => BibleBook)
    @JoinColumn({ name: "bible_book_id" })
    bibleBook: BibleBook;
}

export { Bookmark }