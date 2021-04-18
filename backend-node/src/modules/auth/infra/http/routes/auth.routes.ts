import { Router } from "express";
import AuthController from "../controllers/AuthController";

export class AuthRoute {

    public authRouter: Router;
    public authController: AuthController;

    constructor() {
        this.authRouter = Router();
        this.authController = new AuthController();
    }

    public routes() {
        
        this.authRouter.post('/', this.authController.authenticate);

        return this.authRouter;
    }
}

export default new AuthRoute().routes();