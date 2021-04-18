import { response, Router } from "express";
import authRoutes from "../../../../modules/auth/infra/http/routes/auth.routes";
import userRoutes from "../../../../modules/organization/infra/http/routes/user.routes";

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/auth', authRoutes);

export default routes;