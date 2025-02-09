import Joi from "joi";

export const authSchema = Joi.object({
  email: Joi.string().lowercase().trim().email().required(),
  password: Joi.string().min(6).max(16).trim().required(),
});
