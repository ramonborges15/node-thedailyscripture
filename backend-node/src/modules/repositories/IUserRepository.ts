import UserDTO from "../dtos/UserDTO";

export default interface IUserRepository {
    findAll(): Promise<{ users: UserDTO[] | undefined; count: number; }>;
    create(user: CreateUserDTO): Promise<UserDTO>;
    findByEmail(email: string): Promise<UserDTO | undefined>;
}