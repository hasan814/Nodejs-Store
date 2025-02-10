import { authSchema } from "../../../validators/user/auth.schema.js";

import createHttpError from "http-errors";

class UserController {
  async login(req, res, net) {
    try {
      const result = await authSchema.validateAsync(req.body);
      return res.status(200).send("Login Successfully");
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
}

const UserAuthController = new UserController();

export default UserAuthController;
