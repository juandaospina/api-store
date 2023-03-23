const express = require("express");
const router = express.Router();

const {
  createCustomerSchema,
  updateCustomerSchema,
  getCustomerByIdSchema
} = require("../schemas/customer.schema");
const { validationsHandler } = require("../middlewares/validations.handler");
const { CustomerService } = require("../services/customer.service");

const service = new CustomerService();

router.get("/api/customers", async (req, res, next) => {
  
  try {
    const results = await service.findAll();
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/api/customer",
  validationsHandler(getCustomerByIdSchema, "query"),
  async (req, res, next) => {
    // const { id } = req.query;
    // try {
    //   const user = await service.findOne(id);
    //   res.status(200).json(user);
    // } catch (error) {
    //   next(error);
    // }
  }
);

router.post(
  "/api/create/customer",
  validationsHandler(createCustomerSchema, "body"),
  async (req, res, next) => {
    const data = req.body;
    // console.log("[POST: /api/create/customer]", data);
    try {
      const response = await service.create(data);
      console.log("[RESPONSE_CREATE_CUSTOMER]", response);
      res.status(200).json(response);
    } catch (error) {
      console.log("[/api/create/customer ~ error]", error);
      next(error);
    }  
  }
);

router.patch(
  "/api/update/customer/:id",
  validationsHandler(getCustomerByIdSchema, "params"),
  validationsHandler(updateCustomerSchema, "body"),
  async (req, res, next) => {
    // const { id } = req.params;
    // const data = req.body;
    // try {
    //   const result = await service.updateUser(id, data);
    //   res.status(200).json(result);
    // } catch (error) {
    //   next(error);
    // }
  }
);

router.delete(
  "/api/delete/customer/:id",
  validationsHandler(getCustomerByIdSchema, "params"),
  async (req, res, next) => {
    // const { id } = req.params;
    // try {
    //   const result = await service.deleteUser(id);
    //   res.status(201).send(result);
    // } catch (error) {
    //   next(error);
    // }
  }
);

module.exports = { customerRouter: router };