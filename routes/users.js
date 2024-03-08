const mongoose = require("mongoose");

const plm = require("passport-local-mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/pixr");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  dp: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
});
userSchema.plugin(plm);
module.exports = mongoose.model("User", userSchema);
