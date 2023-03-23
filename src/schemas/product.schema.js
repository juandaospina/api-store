const Joi = require("joi");

const id = Joi.string();
const name = Joi.string().max(30);
const description = Joi.string().max(80);
const stock = Joi.number().integer();
const price = Joi.number().integer();
const image = Joi.string().uri();
const createdAt = Joi.date() || Joi.string();
const updatedAt = Joi.date() || Joi.string();
const categoryId = Joi.string().max(36);

const schemaCreateProduct = Joi.object({
  name: name.required(),
  description: description.required(),
  stock: stock.required(),
  price: price.required(),
  image: image.required(),
  createdAt,
  updatedAt,
  categoryId: categoryId.required(),
});

const schemaUpdateProduct = Joi.object({
  name,
  description,
  stock,
  price,
  image,
  createdAt,
  updatedAt,
});

const schemaProductIdentifier = Joi.object({
  id: id.required(),
});

module.exports = {
  schemaCreateProduct,
  schemaUpdateProduct,
  schemaProductIdentifier,
};
