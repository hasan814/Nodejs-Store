import { HomeController } from "../../http/controller/api/home.controller.js";
import { Router } from "express";

const HomeRouter = Router();

/**
 * @swagger
 * tags:
 *  name: IndexPage
 *  description : index page route and data
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Index of routes
 *     description: Get all necessary data for the index page
 *     tags : [IndexPage]
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not Found
 */

HomeRouter.get("/", HomeController.indexPage);

export default HomeRouter;
