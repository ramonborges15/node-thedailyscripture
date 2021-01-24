import { GroupedObservable } from "rxjs";
import { Group } from "./group";

export class User {
    id?: number;
    name: string;
    email: string;
    password: string;
    group: Group;   
    active: boolean;

    constructor() {
        this.name = '';
        this.email = '';
        this.password = '';
        this.group = new Group();
        this.active = false;

    }
}