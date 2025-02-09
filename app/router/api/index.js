import { HomeController } from "../../http/controller/api/home.controller.js";
import { Router } from "express";

const HomeRouter = Router();

HomeRouter.get("/", HomeController.indexPage);

export default HomeRouter;
