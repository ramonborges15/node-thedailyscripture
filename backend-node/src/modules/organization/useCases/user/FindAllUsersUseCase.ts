import UserDTO from "../../dtos/UserDTO";
import IUserRepository from "../../repositories/IUserRepository";

export default class FindAllUsersUseCase {

    constructor(
        private userRepository: IUserRepository
    ){}

    public async execute(): Promise<{ users: UserDTO[] | undefined; count: number; }> {
        const usersAndCount = await this.userRepository.findAll();
        return usersAndCount;
    }
}