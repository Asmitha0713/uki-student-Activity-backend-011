const express = require("express");
const router = express.Router();

const {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  createCourse
);

router.get(
  "/",
  authMiddleware,
  getAllCourses
);

router.get(
  "/:id",
  authMiddleware,
  getCourseById
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  updateCourse
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteCourse
);

module.exports = router;