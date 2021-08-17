const Task = require("../models/task");

const getAllTasks = async (req, res, next) => {
  const task = await Task.find();
  res.status(200).json(task);
};

const createTask = async (req, res, next) => {
  try {
    const newTask = new Task(req.body);
    const task = await newTask.save();
    res.status(201).json({
      message: "Tarea agregada correctamente",
      data: task,
    });
  } catch (error) {
    error.status(400);
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  const taskId = req.params;
  const newTask = req.body;
  try {
    await Task.findByIdAndUpdate(taskId, newTask);
    res.status(200).json({
      message: "Su tarea fue editada correctamente"
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  const taskId = req.params;
  const newTask = req.body;
  try {
    await Task.findByIdAndRemove(taskId, newTask);
    res.status(200).json({
      message: "Su tarea fue eliminada correctamente"
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
