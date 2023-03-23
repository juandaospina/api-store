const express = require("express");
const router = express.Router();

const {
  schemaCreateProduct,
  schemaProductIdentifier,
  schemaUpdateProduct,
} = require("../schemas/product.schema");
const { validationsHandler } = require("../middlewares/validations.handler");
const { ProductsService } = require("../services/product.services.js");
const service = new ProductsService();

// routing using services - clean arquitecture
// find all products
router.get("/api/products", async (req, res, next) => {
  try {
    const products = await service.findAll();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
});

// filter product by id
router.get(
  "/api/product",
  validationsHandler(schemaProductIdentifier, "query"),
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

// create new product
router.post(
  "/api/create-product",
  validationsHandler(schemaCreateProduct, "body"),
  async (req, res, next) => {
    const data = req.body;
    try {
      const product = await service.createProduct(data);
      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  }
);

// update a product
router.patch(
  "/api/product/:id",
  validationsHandler(schemaProductIdentifier, "params"),
  validationsHandler(schemaUpdateProduct, "body"),
  async (req, res, next) => {
    const { id } = req.params;
    const data = req.body;
    try {
      await service.updateProduct({ id, data });
      res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
);

// delete a product
router.delete(
  "/api/product/:id",
  validationsHandler(schemaProductIdentifier, "params"),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      await service.deleteProduct(id);
      res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
);

module.exports = { productRouter: router };
