import jwt from "jsonwebtoken";
import authConfig from "../../../../shared/conf/auth.json";

export default class GenerateTokenUseCase {

    constructor() { }

    public async execute(params = {}): Promise<any> {
        return jwt.sign(params, authConfig.secret, {
            expiresIn: '365d', // vai durar 1 ano
        });
    }
}