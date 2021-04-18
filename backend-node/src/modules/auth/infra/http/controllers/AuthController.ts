import bcrypt from "bcrypt";
import { Request, Response } from "express";
import UserRepository from "../../../../organization/infra/database/repositories/UserRepository";
import FindUserToAuthenticationByEmailUseCase from "../../../../organization/useCases/user/FindUserToAuthenticationByEmailUseCase";
import GenerateTokenUseCase from "../../../useCases/auth/GenerateTokenUseCase";

export default class AuthController {

    public async authenticate(request: Request, response: Response) {
        const userRepository = new UserRepository();

        try {
            const { email , password } = request.body;

            const findUserToAuthenticationByEmailUseCase = new FindUserToAuthenticationByEmailUseCase(userRepository);
            const user = await findUserToAuthenticationByEmailUseCase.execute(email);

            if(!user) {
                return response.status(401).send({ error: 'Não autorizado!' });
            }
            
            if(!await bcrypt.compare(password, user.password)) {
                return response.status(401).send({ error: 'Não autorizado!' });
            }

            const generateTokenUseCase = new GenerateTokenUseCase();
            const token = await generateTokenUseCase.execute({ id: user.id });
            user.password = undefined;

            return response.status(200).send({ user, token });

        } catch (error) {
            return response.status(error.statusCode || 500).json({ message: error.message, title: error.title });
        }
    }
}