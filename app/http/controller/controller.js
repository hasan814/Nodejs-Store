import autoBind from "auto-bind";

export class Controller {
  constructor() {
    autoBind(this);
  }
  testMethod() {
    return "Test String";
  }
}
