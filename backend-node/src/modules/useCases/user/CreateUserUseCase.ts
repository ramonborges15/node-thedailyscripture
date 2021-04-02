import UserDTO from "../../dtos/UserDTO";
import IUserRepository from "../../repositories/IUserRepository";

export default class CreateUserUseCase {

    constructor(
        private userRepository: IUserRepository
    ){}

    public async execute(user: CreateUserDTO): Promise<UserDTO> {
        const userCreated = await this.userRepository.create(user);
        return userCreated;
    }
}