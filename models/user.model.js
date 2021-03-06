const mongoose = require("mongoose");
const { Schema } = mongoose;
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

const UserSchema = new Schema(
  {
    userName: { type: String, require: true },
    email: { type: String },
    password: { type: String, require: true },
    name: { type: String, require: true, lowercase: true },
    lastName: { type: String, required: false, lowercase: true },
    creationDate: { type: Date, default: Date.now() }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

UserSchema.methods.toJSON = function() {
  let user = this.toObject();
  delete user.password;
  return user;
};

UserSchema.pre("save", async function(next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(user.password, salt);
  user.password = hashedPassword;

  next();
});

UserSchema.methods.comparePasswords = function(password) {
  return compareSync(password, this.password);
};

module.exports = mongoose.model("User", UserSchema);
