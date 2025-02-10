import { Router } from "express";

import UserAuthRouter from "./user/auth.js";
import HomeRouter from "./api/index.js";

const allRoutes = Router();

allRoutes.use("/", HomeRouter);
allRoutes.use("/user", UserAuthRouter);

export default allRoutes;
