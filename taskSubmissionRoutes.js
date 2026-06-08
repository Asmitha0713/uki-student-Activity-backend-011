const express = require("express");
const router = express.Router();

const {
  submitTask,
  getAllSubmissions,
} = require("../controllers/taskSubmissionController");

const authMiddleware = require("../middleware/authMiddleware");

router.post(
  "/",
  authMiddleware,
  submitTask
);

router.get(
  "/",
  authMiddleware,
  getAllSubmissions
);

module.exports = router;