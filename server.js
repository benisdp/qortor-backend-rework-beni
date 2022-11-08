const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const { MONGO_DB_ADDRESS } = process.env;

mongoose
  .connect(MONGO_DB_ADDRESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(console.error);

const userController = require("./controllers/UserController");

//routes
app.use("/api/user", userController);

app.listen(3000, () => {
  console.log(`server listening on port 3000`);
});
