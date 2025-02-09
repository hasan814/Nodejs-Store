import { model, Schema } from "mongoose";

const usersSchema = new Schema({
  Roles: { type: [String], deafult: ["USER"] },
  userName: { type: String, lowercase: true },
  email: { type: String, lowercase: true },
  discount: { type: Number, deafult: 0 },
  bills: { type: [], deafult: [] },
  firstName: { type: String },
  lastName: { type: String },
  birthday: { type: String },
  password: { type: String },
  phone: { type: String },
  otp: {
    type: Object,
    default: { code: 0, expires: 0 },
  },
});

const UsersModel = model("Users", usersSchema);

export default { UsersModel };
