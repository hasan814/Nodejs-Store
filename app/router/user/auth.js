import { Router } from "express";

import UserAuthController from "../../http/controller/user/auth/auth.controller.js";
import multer from "multer";

const upload = multer();

const UserAuthRouter = Router();

/**
 * @swagger
 * /user/get-otp:
 *   post:
 *     tags: [User-Authentication]
 *     summary: Get OTP for user login via phone number
 *     description: Request a one-time password (OTP) to log in using the user's phone number.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               mobile:
 *                 type: string
 *                 pattern: '^[0-9]{10}$'
 *                 example: "09123456789"
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

UserAuthRouter.post("/get-otp", upload.none(), UserAuthController.getOtp); // Handling multipart/form-data

/**
 * @swagger
 * /user/check-otp:
 *   post:
 *     tags: [User-Authentication]
 *     summary: Verify OTP for user login
 *     description: Verify the one-time password (OTP) sent to the user's phone number for login.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mobile:
 *                 type: string
 *                 pattern: '^[0-9]{10}$'
 *                 example: "09123456789"
 *               code:
 *                 type: string
 *                 minLength: 4
 *                 maxLength: 6
 *                 pattern: '^[0-9]+$'
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: OTP verified successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "OTP verified successfully"
 *       400:
 *         description: Bad Request - Invalid or missing parameters
 *       401:
 *         description: Unauthorized - Invalid phone number or OTP
 *       500:
 *         description: Internal Server Error - Something went wrong on the server side
 */

UserAuthRouter.post("/check-otp", UserAuthController.checkOtp);

export default UserAuthRouter;
