//Core Modules
const path = require("path");

//External Modules
const express = require("express");
const { default: moongose } = require("mongoose");
const DB_Path = "mongodb://localhost:27017/todo";


const app = express();

app.use(express.urlencoded());

const Port = 3000;

moongose
  .connect(DB_Path)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(Port, () => {
      console.log(`Server is running on port http://localhost:${Port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
