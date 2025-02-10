import { Controller } from "../controller.js";

class HomeControllerClass extends Controller {
  async indexPage(req, res, next) {
    try {
      return res.status(200).send(`Index Page Store ${this.testMethod()}`);
    } catch (error) {
      next(error);
    }
  }
}

export const HomeController = new HomeControllerClass();
