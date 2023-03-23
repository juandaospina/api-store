const Joi = require("joi");

const id = Joi.string();
const email = Joi.string().max(50);
const password = Joi.string().min(6).max(12);
const role = Joi.string();
const create_at = Joi.date() || Joi.string();
const updatedAt = Joi.date() || Joi.string();

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  role: role.required(),
  create_at,
  updatedAt,
});

const updateUserSchema = Joi.object({
  email,
  password,
  role,
  create_at,
  updatedAt,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
};
