import { Router } from "express";

import UserAuthController from "../../http/controller/user/auth/auth.controller.js";

const UserAuthRouter = Router();

UserAuthRouter.post("/login", UserAuthController.login);

export default UserAuthRouter;
