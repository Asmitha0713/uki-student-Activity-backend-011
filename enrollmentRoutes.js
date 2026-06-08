const express = require("express");
const router = express.Router();

const {
  createEnrollment,
  getAllEnrollments,
} = require("../controllers/enrollmentController");

const authMiddleware = require("../middleware/authMiddleware");

router.post(
  "/",
  authMiddleware,
  createEnrollment
);

router.get(
  "/",
  authMiddleware,
  getAllEnrollments
);

module.exports = router;