const express = require("express");
const { validationsHandler } = require("../middlewares/validations.handler");
const {
  schemaCreateCategory,
  schemaCategoryIdentifier,
  schemaUpdateCategory,
} = require("../schemas/category.schema");
const { CategoryService } = require("../services/category.service");
const router = express.Router();

const service = new CategoryService();

// List of all categories
router.get("/api/categories", async (req, res, next) => {
  try {
    const results = await service.findAll();
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
});

// Find one category by id
router.get(
  "/api/category",
  validationsHandler(schemaCategoryIdentifier, "query"),
  async (req, res, next) => {
    const { id } = req.query;
    try {
      const category = await service.findOne(id);
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }
);

// Create a new category
router.post(
  "/api/create/category",
  validationsHandler(schemaCreateCategory, "body"),
  async (req, res, next) => {
    const data = req.body;
    try {
      const result = await service.create(data);
      res.status(201).send(result);
    } catch (error) {
      next(error);
    }
  }
);

// Update a category
router.patch(
  "/api/category/:id",
  validationsHandler(schemaCategoryIdentifier, "params"),
  validationsHandler(schemaUpdateCategory, "body"),
  async (req, res, next) => {
    const { id } = req.params;
    const data = req.body;
    try {
      await service.update({ id, data });
      res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
);

// Delete a category
router.delete(
  "/api/category/:id",
  validationsHandler(schemaCategoryIdentifier, "params"),
  async (req, res, next) => {
    const { id } = req.params
    try {
      await service.delete(id);
      res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
);

module.exports = { categoryRouter: router };
