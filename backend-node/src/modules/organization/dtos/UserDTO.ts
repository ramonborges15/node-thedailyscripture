import { User } from "../infra/database/models/User";

class UserDTO {
    name: string;
    email: string;

    constructor(user: User) {
        this.name = user.name;
        this.email = user.email;
    }
}

export default UserDTO;