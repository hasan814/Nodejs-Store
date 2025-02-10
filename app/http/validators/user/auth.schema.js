import Joi from "joi";

export const authSchema = Joi.object({
  mobile: Joi.string()
    .length(11)
    .pattern(/^09[0-9]{9}$/)
    .message("Mobile entered is not correct"),
});
