import { User } from "../../infra/database/models/User";
import IUserRepository from "../../repositories/IUserRepository";

export default class FindUserToAuthenticationByEmailUseCase {
    constructor(
        private userRepository: IUserRepository
    ){}

    public async execute(email: string): Promise<User | undefined> {
        const user = await this.userRepository.findByEmail(email);
        return user;
    }
}