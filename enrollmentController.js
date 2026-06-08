const Enrollment = require("../models/Enrollment");

exports.createEnrollment = async (req, res) => {
  try {
    const enrollment = await Enrollment.create(req.body);

    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.findAll();

    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};