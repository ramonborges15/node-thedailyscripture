export interface User {
    id?: number;
    name: string;
    email: string;
    password: string;
    group_id: number;   
    active: boolean;
}