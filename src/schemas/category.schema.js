const Joi = require("joi");

const id = Joi.string();
const name = Joi.string().max(30);
const description = Joi.string().max(80);
const createdAt = Joi.date() || Joi.string();
const updatedAt = Joi.date() || Joi.string();
const image = Joi.string().uri();

const schemaCreateCategory = Joi.object({
    name: name.required(),
    description: description.required(),
    image: image.required(),
    createdAt,
    updatedAt,
});

const schemaUpdateCategory = Joi.object({
    name,
    description,
    image,
    createdAt,
    updatedAt,
});

const schemaCategoryIdentifier = Joi.object({
    id: id.required(),
});

module.exports = {
    schemaCreateCategory,
    schemaUpdateCategory,
    schemaCategoryIdentifier
}