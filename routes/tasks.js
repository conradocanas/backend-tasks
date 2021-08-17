const express = require("express");
const router = express.Router();

// Import Controller
const taskController = require("../controllers/task");

router
  .route("/")
  .get(taskController.getAllTasks)
  .post(taskController.createTask);

router
  .route("/:_id")
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);

module.exports = router;
