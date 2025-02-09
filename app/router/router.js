import { Router } from "express";

import HomeRouter from "./api/index.js";

const allRoutes = Router();

allRoutes.use("/", HomeRouter);

export default allRoutes;
