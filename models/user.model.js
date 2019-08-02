const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  userName: { type: String, require: true },
  emil: { type: String },
  password: { type: String, require: true },
  name: { type: String, require: true, lowercase: true },
  lastName: { type: String, required: false, lowercase: true },
  creationDate: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("User", UserSchema);
