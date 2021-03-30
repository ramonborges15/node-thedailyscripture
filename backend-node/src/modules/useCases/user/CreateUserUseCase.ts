import UserDTO from "../../dtos/UserDTO";
import { User } from "../../infra/database/models/User";
import IUserRepository from "../../repositories/IUserRepository";

export default class CreateUserUseCase {

    constructor(
        private userRepository: IUserRepository
    ){}

    public async execute(user: User): Promise<UserDTO> {
        const userCreated = await this.userRepository.create(user);
        return new UserDTO(userCreated);
    }
}