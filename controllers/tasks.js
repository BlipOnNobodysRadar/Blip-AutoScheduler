const Task = require("../models/Task");

// needs a user obj
module.exports = {
  //
  getProfile: async (req, res) => {
    try {
      const posts = await Task.find({ user: req.user.id }); // Makes arr of all tasks with that user id
      res.render("profile.ejs", { tasks: posts, user: req.user }); //changed posts to tasks
    } catch (err) {
      console.log(err);
    }
  },
  // Could convert this into the schedule. For now, just display tasks.
  getFeed: async (req, res) => {
    try {
      const tasks = await Task.find().sort({ createdAt: "desc" }).lean(); //posts to tasks
      res.render("feed.ejs", { tasks: tasks });
    } catch (err) {
      console.log(err);
    }
  },
  // No need for now. Could use this to edit individual tasks.
  // getPost: async (req, res) => {
  //   try {
  //     const post = await Post.findById(req.params.id);
  //     const comments = await Comment.find({ post: req.params.id });
  //     console.log(comments);
  //     console.log(`Params.id ${req.params.id}`);
  //     res.render("post.ejs", {
  //       post: post,
  //       user: req.user,
  //       comments: comments,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  // createPost to createTask
  createTask: async (req, res) => {
    try {
      await Task.create({
        title: req.body.title,
        user: req.user.id,
        category: "Critical",
        priority: 10,
      });
      console.log("Task has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  //removed likePost
  deleteTask: async (req, res) => {
    try {
      // Find post by id
      let task = await Task.findById({ _id: req.params.id });
      // Delete post from db
      await Task.remove({ _id: req.params.id });
      console.log("Deleted Task");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
