const express = require("express");
require("dotenv").config();
const cors = require("cors");

const { productRouter } = require("./routes/product.router");
const { userRouter } = require("./routes/user.router");
const { customerRouter } = require("./routes/customer.router");
const { categoryRouter } = require("./routes/category.router");
const { orderRouter } = require("./routes/order.router");
const { logErrors, errorHandler, boomErrorHandler, querysErrorHandler } = require("./middlewares/error.handler");
const { globalRequest } = require("./middlewares/global.request");

const { stateAuthentication } = require("./libs/sequelize");

const enableDomains = ["http://localhost:5173/"]

// initializations
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors(enableDomains));

// Connection ORM
stateAuthentication();


// routing middleware
app.use(productRouter);
app.use(userRouter);
app.use(customerRouter);
app.use(categoryRouter);
app.use(orderRouter);

// error handler middleware
app.use(globalRequest);
app.use(querysErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);
app.use(logErrors);

// server running
app.listen(process.env.PORT, () => {
  console.log(`App running in port ${process.env.PORT}`);
});
