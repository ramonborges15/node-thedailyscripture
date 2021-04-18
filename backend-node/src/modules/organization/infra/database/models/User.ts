import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Group } from './Group';

@Entity("user")
class User {
    @PrimaryColumn()
    id: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column('int4', { name: "group_id" })
    groupId: number;

    @OneToOne(type => Group)
    @JoinColumn({ name: "group_id" })
    group: Group;
}

export { User };