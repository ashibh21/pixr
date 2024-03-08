const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/:27017/pixr");

const postSchema = new mongoose.Schema({
  imgText: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Array,
    default: [],
  },
});
module.exports = mongoose.model("Post", postSchema);
