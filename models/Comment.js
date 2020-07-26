const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  id: String,
  value: String,
  vote: Number,
  user_id: String,
});

module.exports = mongoose.model("Comment", CommentSchema);
