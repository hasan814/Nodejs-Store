import { Controller } from "../controller.js";

class HomeControllerClass extends Controller {
  indexPage(req, res, next) {
    return res.status(200).send(`Index Page Store ${this.testMethod()}`);
  }
}

export const HomeController = new HomeControllerClass();
