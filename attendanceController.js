const Attendance = require("../models/Attendance");

exports.markAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.create(req.body);

    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findAll();

    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};