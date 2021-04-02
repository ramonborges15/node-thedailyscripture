import { Request, Response} from "express";
import CreateUserUseCase from "../../../useCases/user/CreateUserUseCase";
import FindAllUsersUseCase from "../../../useCases/user/FindAllUsersUseCase";
import FindUserByEmailUseCase from "../../../useCases/user/FindUserByEmailUseCase";
import UserRepository from "../../database/repositories/UserRepository";

export default class UserController {

    public async findAll(request: Request, response: Response) {
        const userRepository = new UserRepository();
        
        try {
            const findAllUsersUseCase = new FindAllUsersUseCase(userRepository);
            const { users, count } = await findAllUsersUseCase.execute();
            
            return response.status(200).json({ users, count });
        } catch (error) {
            return response.status(error.statusCode || 500).json({ message: error.message, title: error.title });
        }
    }

    public async create(request: Request, response: Response) {

        const userRepository = new UserRepository();

        try {
            const user = request.body;

            const findUserByEmailUseCase = new FindUserByEmailUseCase(userRepository);
            const userAlreadyExists = findUserByEmailUseCase.execute(user.email);
            
            if(userAlreadyExists) {
                return response.status(406).json({ message: "Esse e-mail já se encontra cadastrado."});
            }
            
            const createUserUseCase = new CreateUserUseCase(userRepository);
            const userCreated = await createUserUseCase.execute(user);

            return response.status(201).json(userCreated);

        } catch (error) {
            return response.status(error.statusCode || 500).json({ message: error.message, title: error.title });
        }
    }
}