const express = require("express");
const router = express.Router();

const {
  markAttendance,
  getAllAttendance,
} = require("../controllers/attendanceController");

const authMiddleware = require("../middleware/authMiddleware");

router.post(
  "/",
  authMiddleware,
  markAttendance
);

router.get(
  "/",
  authMiddleware,
  getAllAttendance
);

module.exports = router;