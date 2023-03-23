const boom = require("@hapi/boom");
const { v4: uuidv4 } = require("uuid");
const { Customer } = require("../db/models/customer.model");

// const { Customer } = require("../db/models/customer.model");
const { User } = require("../db/models/user.model");

class UserService {
  //   constructor() {}

  async find() {
    const users = await User.findAll({
      // Include permite resolver de la tabla relacionada se quieren obtener, definiendo el Modelo, el alias del campo de la relación
      // y las columnas de la tabla relacionada que se mostrarán
      include: {
        model: Customer,
        as: "customer",
        attributes: ["id", "name", "lastname", "phone", "createdAt"],
      },
    });
    const quantityUsers = await User.count();
    if (!users.length && !quantityUsers) throw Error("Server error");
    return { quantityUsers, users };
  }

  async findOne(id) {
    const user = await User.findByPk(id);
    if (!user) throw boom.notFound(`User with ID ${id} not found`);
    return user;
  }

  async createUser(data) {
    const id = uuidv4();

    const newUser = await User.create({ id, ...data });
    console.log("[result_create_user]", newUser);

    if (!newUser) throw Error("Server error");
    return newUser;
  }

  async updateUser(id, data) {
    const isUser = await this.findOne(id);
    const result = await isUser.update(data);
    return result;
  }

  async deleteUser(id) {
    const isUser = await this.findOne(id);
    const result = isUser.destroy();
    return result;
  }
}

module.exports = { UserService };
