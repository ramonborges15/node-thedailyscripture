import { getRepository, Repository } from "typeorm";
import UserDTO from "../../../dtos/UserDTO";
import IUserRepository from "../../../repositories/IUserRepository";
import { User } from "../models/User";

class UserRepository implements IUserRepository {

    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(User);
    }

    public async findAll(): Promise<{ users: UserDTO[]; count: number; }> {
        console.log("Iniciando a consulta de findAll");
        
        const [ users, count ] = await this.ormRepository.findAndCount();

        return {
            users: users.map(user => new UserDTO(user)),
            count: count
        }
    }


}

export default UserRepository;