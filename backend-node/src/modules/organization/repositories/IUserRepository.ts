import UserDTO from "../dtos/UserDTO";
import { User } from "../infra/database/models/User";

export default interface IUserRepository {
    findAll(): Promise<{ users: UserDTO[] | undefined; count: number; }>;
    create(user: CreateUserDTO): Promise<UserDTO>;
    findByEmail(email: string): Promise<User | undefined>;
}