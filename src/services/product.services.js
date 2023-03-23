const { v4: uuidv4 } = require("uuid");
const boom = require("@hapi/boom");
const { Product } = require("../db/models/product.model");
const { Category } = require("../db/models/category.model");

class ProductsService {
  // constructor() {}

  async findAll() {
    const products = await Product.findAll({
      include: {
        model: Category,
        as: "category",
        attributes: ["name"]
      },
    });
    if (!products) throw boom.badGateway();
    return products;
  }

  async findOne(id) {
    const product = await Product.findByPk(id);
    if (!product) throw boom.notFound();
    return product;
  }

  async createProduct(data) {
    const id = uuidv4();
    const product = await Product.create({ id, ...data });
    if (!product) throw boom.badGateway();
    return product;
  }

  async updateProduct({id, data}) {
    const isProduct = await this.findOne(id);
    const product = isProduct.update(data);
    return product;
  }

  async deleteProduct(id) {
    const isProduct = await this.findOne(id);
    const product = isProduct.destroy();
    return product;
  }
}

module.exports = { ProductsService };
