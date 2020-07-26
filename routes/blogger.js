const express = require("express"),
  jwt = require("jsonwebtoken");
const User = require("../models/User");
const Comment = require("../models/Comment");

const router = express.Router();

const authenticateToken = require("../middlewares/authenticateToken");

router.post("/login", async (req, res) => {
  const blogger = {
    username: req.body.username,
    password: req.body.password,
  };

  const user = await User.findOne(blogger).exec();
  if (!user) return res.json({ status: "error", message: "User Not Found" });

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

  res.json({ token: accessToken });
});

router.put("/mark", authenticateToken, async (req, res, next) => {
  const user = await User.findOne({ id: req.body.commenterID }).exec();
  if (!user) return res.json({ status: "error", message: "User Not Found" });

  if (user.markedBy.length === 0) {
    // Update Flag 1
  }

  if (user.markedBy.length === 1) {
    // Update spammer 1
  }
});

router.put("/unmark", authenticateToken, async (req, res, next) => {
  const user = await User.findOne({ id: req.body.commenterID }).exec();
  if (!user) return res.json({ status: "error", message: "User Not Found" });

  if (user.markedBy.includes(req.body.id)) {
    // Remove Marked By From Array
  }
  if (user.markedBy.length === 1) {
    // Update Flag 0
  }

  if (user.markedBy.length === 2) {
    // Update spammer 0
  }
});

router.delete(
  "/:commenterId/:commentID",
  authenticateToken,
  (req, res, next) => {
    //   res.send("Logged In");
  }
);

module.exports = router;
