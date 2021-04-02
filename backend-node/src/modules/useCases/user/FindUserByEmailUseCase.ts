import UserDTO from "../../dtos/UserDTO";
import IUserRepository from "../../repositories/IUserRepository";

export default class FindUserByEmailUseCase {
    constructor(
        private userRepository: IUserRepository
    ){}

    public async execute(email: string): Promise<{ userDTO: UserDTO | undefined }> {
        const user = await this.userRepository.findByEmail(email);
        return user;
    }
}