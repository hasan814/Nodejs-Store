import { model, Schema } from "mongoose";

const usersSchema = new Schema({
  discount: { type: Number, deafult: 0 },
  bills: { type: [], deafult: [] },
  firstName: { type: String },
  lastName: { type: String },
  birthday: { type: String },
  password: { type: String },
  userName: { type: String },
  phone: { type: String },
  email: { type: String },
  otp: {
    type: Object,
    default: { code: 0, expires: 0 },
  },
});

const UsersModel = model("Users", usersSchema);

export default { UsersModel };
