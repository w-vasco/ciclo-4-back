const mongoose = require("mongoose");

const schemaUser = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);
const User = mongoose.model("User", schemaUser);

module.exports = User;
