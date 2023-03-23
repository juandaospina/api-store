const { v4: uuidv4 } = require("uuid");
const boom = require("@hapi/boom");
const { Category } = require("../db/models/category.model");
const { Product } = require("../db/models/product.model");

class CategoryService {
  // constructor() {}

  async findAll() {
    const categories = await Category.findAll({
      // include: {
      //   model: Product,
      //   as: "products",
      //   attributes: [
      //     "name",
      //     "description",
      //     "stock",
      //     "price",
      //     "image",
      //     "categoryId",
      //   ],
      // },
    });
    if (!categories) throw boom.badGateway();
    return categories;
  }

  async findOne(id) {
    const category = await Category.findByPk(id, {
      include: {
        model: Product,
        as: "products",
        attributes: [
          "name",
          "description",
          "stock",
          "price",
          "image",
          "categoryId",
        ],
      },
    });
    if (!category) throw boom.notFound();
    return category;
  }

  async create(data) {
    const id = uuidv4();
    const newCategory = await Category.create({ id, ...data });
    if (!newCategory) throw boom.badGateway();
    return newCategory;
  }

  async update({ id, data }) {
    const isCategory = await this.findOne(id);
    const result = isCategory.update(data);
    if (!result) throw boom.badGateway();
    return result;
  }

  async delete(id) {
    const isCategory = await this.findOne(id);
    const result = await isCategory.destroy();
    if (!result) throw boom.badGateway();
    return result;
  }
}

module.exports = { CategoryService };
