const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");

//Load env variables
dotenv.config({ path: "./config/config.env" });

//connect to database
connectDB();
//import route files
const productRoutes = require("./routes/products");
const app = express();
//body parser
app.use(express.json());
//Dev Logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//mount the routes
app.use("/api/v1/products", productRoutes);
app.get("/", (req, res) => {
  res.send(
    '<h1>Welcome to Products API</h1> <h4>Check the documentation below</h4><a href="https://github.com/punyprogrammer/inventory_api">Documentation</a>'
  );
});

//use the errorHandler
app.use(errorHandler);
//use the notFound
app.use(notFound);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} node on port ${PORT}`
  )
);
