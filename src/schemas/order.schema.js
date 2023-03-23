const Joi = require("joi");

const id = Joi.string().uuid();
const status = Joi.string();
const createdAt = Joi.date();
const updatedAt = Joi.date();
const customerId = Joi.string().uuid();

const orderCreateValidator = Joi.object({
  status: status.required(),
  createdAt,
  updatedAt,
  customerId: customerId.required(),
});

const orderUpdateValidator = Joi.object({
  status,
  createdAt,
  updatedAt,
  customerId,
});

const orderIdValidator = Joi.object({
  id: id.required(),
});

module.exports = {
  orderCreateValidator,
  orderUpdateValidator,
  orderIdValidator,
};
