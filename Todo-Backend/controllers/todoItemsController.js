const TodoItem = require("../models/TodoItem");


exports.getAllTodoItems = async (req, res, next) => {
  const todoItems = await TodoItem.find();
  res.status(200).json(todoItems);
}

exports.createTodoItem = async (req, res, next) => {
  console.log(req.body);
  const { task, date } = req.body;
  const todoItem = new TodoItem({ task, date });
  await todoItem.save();
  res.status(201).json(todoItem);
}

exports.deleteTodoItem = async (req, res, next) => {
  const {id} = req.params;
  await TodoItem.findByIdAndDelete(id);
  res.status(200).json({ _id: id})
}

exports.markCompleted = async (req, res, next) => {
  const {id} = req.params;
  const todoItem = await TodoItem.findById(id);
  todoItem.completed = true;
  await todoItem.save();
  res.status(200).json(todoItem);
}

