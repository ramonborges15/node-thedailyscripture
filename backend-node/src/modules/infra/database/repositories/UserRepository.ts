import { getRepository, Repository } from "typeorm";
import UserDTO from "../../../dtos/UserDTO";
import IUserRepository from "../../../repositories/IUserRepository";
import { User } from "../models/User";

class UserRepository implements IUserRepository {

    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(User);
    }

    public async create(user: CreateUserDTO): Promise<UserDTO> {
        const userCreated = this.ormRepository.create(user);
        const userSaved = await this.ormRepository.save(userCreated);
        return new UserDTO(userSaved);       
    }

    public async findAll(): Promise<{ users: UserDTO[]; count: number; }> {
        const [ users, count ] = await this.ormRepository.findAndCount();

        return {
            users: users.map(user => new UserDTO(user)),
            count: count
        }
    }

    public async findByEmail(email: string): Promise<UserDTO | undefined> {
        const user = await this.ormRepository.findOne({
            where: {
                email: email
            }
        });
        
        return user ? new UserDTO(user) : user;
    }

}

export default UserRepository;