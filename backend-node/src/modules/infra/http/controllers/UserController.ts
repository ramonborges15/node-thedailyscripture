import { Request, Response} from "express";
import FindAllUsersUseCase from "../../../useCases/user/FindAllUsersUseCase";
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
}