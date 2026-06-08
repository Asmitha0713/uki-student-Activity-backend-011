const express = require("express");
const router = express.Router();

const {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  createTask
);

router.get(
  "/",
  authMiddleware,
  getAllTasks
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  updateTask
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteTask
);

module.exports = router;