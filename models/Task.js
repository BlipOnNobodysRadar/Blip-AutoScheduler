const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  category: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  priority: {
    type: Number,
  },
  deadline: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", TasksSchema);
