const express = require("express");
const dotenv = require("dotenv");

const { connectDB } = require("./config/db");

// Load environment variables
dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/enrollments", require("./routes/enrollmentRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/task-submissions", require("./routes/taskSubmissionRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "UKI Student Activity Backend API Running Successfully"
  });
});

// Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});