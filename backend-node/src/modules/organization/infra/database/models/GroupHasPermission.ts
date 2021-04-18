import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Group } from "./Group";
import { Permission } from "./Permission";

@Entity("group_has_permission")
class GroupHasPermission {
    
    @PrimaryColumn()
    id: number;

    @Column('int4', { name: "group_id" })
    groupId: number;

    @ManyToOne(type => Group)
    @JoinColumn({ name: "group_id" })
    group: Group;

    @Column('int4', { name: "permission_id" })
    permissionId: number;

    @ManyToOne(type => Permission)
    @JoinColumn({ name: "permission_id" })
    permission: Permission;

}

export { GroupHasPermission }