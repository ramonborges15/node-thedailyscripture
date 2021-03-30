import UserDTO from "../dtos/UserDTO";
import { User } from "../infra/database/models/User";

export default interface IUserRepository {
    findAll(): Promise<{ users: UserDTO[] | undefined; count: number; }>;
    create(user: User): Promise<User>;
}