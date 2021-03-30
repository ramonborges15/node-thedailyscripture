import { Router } from "express"
import UserController from "../controllers/UserController";

export class UserRoute {

    public userRouter: Router;
    public userController: UserController;

    constructor() {
        this.userRouter = Router();
        this.userController = new UserController();
    }

    public routes() {
        this.userRouter.get('/', this.userController.findAll);
        this.userRouter.post('/', this.userController.create);
        
        return this.userRouter;
    }

}

export default new UserRoute().routes();