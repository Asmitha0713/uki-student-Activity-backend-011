const TaskSubmission = require("../models/TaskSubmission");

exports.submitTask = async (req, res) => {
  try {
    const submission = await TaskSubmission.create(req.body);

    res.status(201).json(submission);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllSubmissions = async (req, res) => {
  try {
    const submissions = await TaskSubmission.findAll();

    res.status(200).json(submissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};