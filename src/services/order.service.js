const { v4: uuidv4 } = require("uuid");
const boom = require("@hapi/boom");

const { Order } = require("../db/models/order.model");

class OrderService {
  //   constructor() {}

  async findOne(id) {
    const order = await Order.findByPk(id);
    if (!order) throw boom.notFound();
    return order;
  }

  async findAll() {
    const orders = await Order.findAll();
    if (!orders) throw boom.badGateway();
    return orders;
  }

  async createOrder(data) {
    const id = uuidv4();
    const newOrder = await Order.create({ id, ...data });
    if (!newOrder) throw boom.badGateway();
    return newOrder;
  }
}

module.exports = {
  OrderService,
};
