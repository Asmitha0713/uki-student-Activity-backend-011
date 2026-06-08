const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const TaskSubmission = sequelize.define("TaskSubmission", {
  submissionText: {
    type: DataTypes.TEXT,
  },
});

module.exports = TaskSubmission;