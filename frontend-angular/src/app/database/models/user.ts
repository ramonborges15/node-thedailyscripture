import { GroupedObservable } from "rxjs";

export class User {
    id?: number;
    name: string;
    email: string;
    password: string;
    group_id: number;   
    active: boolean;

    constructor() {
        this.name = '';
        this.email = '';
        this.password = '';
        this.group_id = 0;
        this.active = true;
    }
}