const { v4: uuidv4 } = require("uuid");

const { Customer } = require("../db/models/customer.model");
const { User } = require("../db/models/user.model");
const { UserService } = require("./user.service");
const instanceUser = new UserService();

class CustomerService {
  // constructor() {}

  async findAll() {
    const customers = await Customer.findAll({
      // Create a relation with table users through userInfo key in Customer.belongsTo() 
      include: {
        model: User,
        as: "user",
        attributes: ["email", "password", "role"],
      },
    });
    return customers;
  }

  async create(data) {
    const id = uuidv4();

    // First: Create a new user with email and password using an instance of UserService.createUser()
    const newUser = await instanceUser.createUser(data.user);
    // Second: Create a customer, generating id: uuid(), data and foreign key is the id returned for newUser
    const newCustomer = await Customer.create({
      id,
      ...data,
      userId: newUser.id,
    });
    /* const newCustomer = await Customer.create(id, data, {
        include: ["user"]
      }); 
    */
    if (!newCustomer) throw Error("Cannot create a new customer");
    return newCustomer;
  }
}

module.exports = { CustomerService };
