import { User } from "../infra/database/models/User";

class UserDTO {
    id: number;
    name: string;
    email: string;
    token: string;

    constructor(user: User) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
    }
}

export default UserDTO;