const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema({
  label: {
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
});

module.exports = mongoose.model("Task", TasksSchema);
