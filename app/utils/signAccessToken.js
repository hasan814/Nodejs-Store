import { SECRET_KEY } from "./constants.js";

import createHttpError from "http-errors";
import UsersModel from "../http/models/users.js";
import JWT from "jsonwebtoken";

export const signAccessToken = (userId) => {
  return new Promise(async (resolve, reject) => {
    const user = await UsersModel.findById(userId);
    const payload = { mobile: user.mobile, userID: user._id };
    const secret = "";
    const options = { expiresIn: "1h" };
    JWT.sign(payload, SECRET_KEY, options, (err, token) => {
      if (err) reject(createHttpError.InternalServerError("Server Error"));
      resolve(token);
    });
  });
};
