import { Router } from "express";

import UserAuthController from "../../http/controller/user/auth/auth.controller.js";

const UserAuthRouter = Router();

/**
 * @swagger
 * tags:
 *    name : User-Authentication
 *    description : user-auth section
 */

/**
 * @swagger
 * /user/login:
 *   post:
 *     tags: [User-Authentication]
 *     summary: Login User in userpanel with phone number
 *     description: One-time password (OTP) login using phone number
 *     parameters:
 *       - name: mobile
 *         description: FA-IRI phone number (e.g., 09123456789)
 *         in: formData
 *         required: true
 *         type: string
 *         example: "09123456789"   # Example value to show in Swagger UI
 *     responses:
 *       201:
 *         description: Successfully logged in and OTP sent
 *       400:
 *         description: Bad Request - Invalid or missing parameters
 *       401:
 *         description: Unauthorized - Invalid phone number or OTP
 *       500:
 *         description: Internal Server Error - Something went wrong on the server side
 */

UserAuthRouter.post("/login", UserAuthController.login);

export default UserAuthRouter;
