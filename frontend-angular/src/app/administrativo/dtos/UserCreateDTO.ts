
export class UserCreateDTO {
    name: string;
    email: string;
    password: string;

    constructor() {
        this.name = '';
        this.email = '';
        this.password = '';
    }
}