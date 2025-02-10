import { randomNumberGenerator } from "../../../../utils/randomNumber.js";
import { EXPIRES_IN, USER_ROLE } from "../../../../utils/constants.js";
import { authSchema } from "../../../validators/user/auth.schema.js";
import { Controller } from "../../controller.js";

import createHttpError from "http-errors";
import UsersModel from "../../../models/users.js";

class UserController extends Controller {
  async login(req, res, next) {
    try {
      await authSchema.validateAsync(req.body);
      const { mobile } = req.body;
      console.log(mobile);
      const code = randomNumberGenerator();
      const result = await this.saveUser(mobile, code);
      if (!result)
        throw createHttpError.Unauthorized("Login is not Successfully");
      return res.status(200).send({
        data: {
          statusCode: 200,
          message: "Validation Code sent Successfully",
          code,
          mobile,
        },
      });
    } catch (error) {
      next(createHttpError.BadRequest(error.message));
    }
  }
  async saveUser(mobile, code) {
    let otp = { code, expiresIn: EXPIRES_IN };

    const result = await this.checkExistUser(mobile);
    if (result) {
      return await this.updateUser(mobile, { otp });
    }
    return !!(await UsersModel.create({ mobile, otp, Roles: USER_ROLE }));
  }
  async checkExistUser(mobile) {
    const user = await UsersModel.findOne({ mobile });
    return !!user;
  }
  async updateUser(mobile, objectData = {}) {
    Object.keys(objectData).forEach((key) => {
      if (["", " ", 0, null, undefined, "0", NaN].includes(objectData[key]))
        delete objectData[key];
    });
    const updateResult = await UsersModel.updateOne(
      { mobile },
      { $set: objectData }
    );
    return !!updateResult.modifiedCount;
  }
}

const UserAuthController = new UserController();

export default UserAuthController;
