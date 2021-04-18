import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { BiblicalPassage } from "./BiblicalPassage";
import { ReadingPlan } from "./ReadingPlan";

@Entity("reading_plan_has_biblical_passage")
class ReadingPlanHasBiblicalPassage {
    
    @PrimaryColumn({ name: "order_passage" })
    orderPassage: number; 

    @Column('int4', { name: "reading_plan_id" })
    readingPlanId: number; 

    @ManyToOne(type => ReadingPlan)
    @JoinColumn({ name: "reading_plan_id" })
    readingPlan: ReadingPlan;

    @Column('int4', { name: "biblical_passage_id" })
    biblicalPassageId: number; 

    @ManyToOne(type => BiblicalPassage)
    @JoinColumn({ name: "biblical_passage_id" })
    biblicalPassage: BiblicalPassage;
}

export { ReadingPlanHasBiblicalPassage }