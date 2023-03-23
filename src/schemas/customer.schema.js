const Joi = require("joi");

const id = Joi.string();
const name = Joi.string();
const lastname = Joi.string();
const phone = Joi.string().min(10).max(10);
const create_at = Joi.string();
const updated_at = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(6).max(12);
const role = Joi.string();
const userId = Joi.string();

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastname: lastname.required(),
  phone: phone.required(),
  create_at,
  updated_at,
  user: Joi.object({
    email: email.required(),
    password: password.required(),
    role: role.required(),
  })
  // userId: userId.required(),
})

const updateCustomerSchema = Joi.object({
  name,
  lastname,
  phone,
  create_at,
  updated_at,
  userId,
});

const getCustomerByIdSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCustomerSchema,
  updateCustomerSchema,
  getCustomerByIdSchema,
};
