import { Controller } from "../controller.js";
import { authSchema } from "../../validators/user/auth.schema.js";

import createHttpError from "http-errors";

class HomeControllerClass extends Controller {
  async indexPage(req, res, next) {
    try {
      const result = await authSchema.validateAsync(req.body);
      return res.status(200).send(`Index Page Store ${this.testMethod()}`);
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
}

export const HomeController = new HomeControllerClass();
