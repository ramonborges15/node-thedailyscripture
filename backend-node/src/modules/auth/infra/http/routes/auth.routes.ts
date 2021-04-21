import { Router } from "express";
import authInfoRequest from "../../../../../shared/infra/http/middlewares/auth";
import AuthController from "../controllers/AuthController";

export class AuthRoute {

    public authRouter: Router;
    public authController: AuthController;

    constructor() {
        this.authRouter = Router();
        this.authRouter.use(authInfoRequest);
        this.authController = new AuthController();
    }

    public routes() {
        
        this.authRouter.post('/', this.authController.authenticate);

        return this.authRouter;
    }
}

export default new AuthRoute().routes();