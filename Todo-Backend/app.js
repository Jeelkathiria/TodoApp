//Core Modules
const path = require("path");

//External Modules
const express = require("express");
const { default: moongose } = require("mongoose");
const DB_Path = "mongodb+srv://root:root@jeel.fgkvcqt.mongodb.net/todo?retryWrites=true&w=majority&appName=Jeel";;
const cors = require("cors");

//Local Modules
const todoItemsRouter = require("./routes/todoItemsRouter");
const errorController = require("./controllers/error");


const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors())

app.use('/api/todo', todoItemsRouter);
app.use(errorController.get404);

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
