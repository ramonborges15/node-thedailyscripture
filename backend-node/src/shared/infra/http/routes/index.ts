import { response, Router } from "express";
import userRoutes from "../../../../modules/infra/http/routes/user.routes";

const routes = Router();

routes.use('/users', userRoutes);

export default routes;