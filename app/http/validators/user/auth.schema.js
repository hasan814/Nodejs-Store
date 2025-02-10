import Joi from "joi";

export const getOtpSchema = Joi.object({
  mobile: Joi.string()
    .length(11)
    .pattern(/^09[0-9]{9}$/)
    .message("Mobile number must be 11 digits and start with '09'"),
});

export const checkOtpSchema = Joi.object({
  mobile: Joi.string()
    .length(11)
    .pattern(/^09[0-9]{9}$/)
    .message("Mobile number must be 11 digits and start with '09'"),
  code: Joi.string()
    .min(4)
    .max(6)
    .pattern(/^[0-9]+$/)
    .message("OTP code must be between 4 and 6 digits long and numeric"),
});
