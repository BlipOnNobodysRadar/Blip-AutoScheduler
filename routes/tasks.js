const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasks");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
//router.get("/:id", ensureAuth, tasksController.getTask);

router.post("/createTask", tasksController.createTask);

router.delete("/deleteTask/:id", tasksController.deleteTask);

module.exports = router;
