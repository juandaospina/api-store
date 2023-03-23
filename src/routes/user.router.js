const express = require("express");
const router = express.Router();

const {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
} = require("../schemas/user.schema");
const { validationsHandler } = require("../middlewares/validations.handler");
const { UserService } = require("../services/user.service");

const service = new UserService();

router.get("/api/users", async (req, res, next) => {
  try {
    const results = await service.find();
    res.status(200).json(results);
  } catch (error) {
    console.log("[error_getting_users]", error);
    next(error);
  }
});

router.get(
  "/api/user",
  validationsHandler(getUserSchema, "query"),
  async (req, res, next) => {
    const { id } = req.query;
    try {
      const user = await service.findOne(id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/api/create/user",
  validationsHandler(createUserSchema, "body"),
  async (req, res, next) => {
    const data = req.body;
    console.log("[create_user]", data);

    try {
      const result = await service.createUser(data);
      res.status(201).json(result.dataValues);
    } catch (error) {
      console.log("[error_create_user]", error);
      debugger
      next(error);
    }
  }
);

router.patch(
  "/api/update/user/:id",
  validationsHandler(getUserSchema, "params"),
  validationsHandler(updateUserSchema, "body"),
  async (req, res, next) => {
    const { id } = req.params;
    const data = req.body;
    try {
      const result = await service.updateUser(id, data);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/api/delete/user/:id",
  validationsHandler(getUserSchema, "params"),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await service.deleteUser(id);
      console.log("[api/delete/user]", result);
      res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
);

module.exports = { userRouter: router };
