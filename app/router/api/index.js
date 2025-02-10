import { HomeController } from "../../http/controller/api/home.controller.js";
import { Router } from "express";

const HomeRouter = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Index of routes
 *     description: Get all necessary data for the index page
 *     tags:
 *       - Home
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not Found
 */

HomeRouter.get("/", HomeController.indexPage);

export default HomeRouter;
