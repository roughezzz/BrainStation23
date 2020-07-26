const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  id: String,
  name: String,
  password: String,
  flag: Boolean,
  spammer: Boolean,
  markedBy: Array,
});

module.exports = mongoose.model("User", UserSchema);
