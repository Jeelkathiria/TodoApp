const express = require('express');
const todoItemsRouter = express.Router();

const todoItemsController =  require("../controllers/todoItemsController");

todoItemsController.post("/", authController.createTodoItem);

module.exports = todoItemsController;