import { HomeController } from "../../http/controller/api/home.controller.js";
import { Router } from "express";

const HomeRouter = Router();

HomeRouter.post("/", HomeController.indexPage);

export default HomeRouter;
