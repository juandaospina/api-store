const express = require("express");
const router = express.Router();

const { OrderService } = require("../services/order.service");
const { validationsHandler } = require("../middlewares/validations.handler");
const {
  orderCreateValidator,
  orderIdValidator,
} = require("../schemas/order.schema");

const service = new OrderService();

// Find one order by id
router.get(
  "/api/order",
  validationsHandler(orderIdValidator, "query"),
  async (req, res, next) => {
    const { id } = req.query;
    try {
      const result = await service.findOne(id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

// Return all orders
router.get("/api/orders", async (req, res, next) => {
  try {
    const results = await service.findAll();
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
});

// Create a new order
router.post(
  "/api/create-order",
  validationsHandler(orderCreateValidator, "body"),
  async (req, res, next) => {
    const data = req.body;
    try {
      const result = await service.createOrder(data);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = {
  orderRouter: router,
};
