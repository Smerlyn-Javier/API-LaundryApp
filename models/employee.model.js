const mongoose = require("mongoose");
const { Schema } = mongoose;
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

const EmployeeSchema = new Schema(
  {
    idPosition: { type: Schema.Types.ObjectId, ref: "Position" },
    idStatus: { type: Schema.Types.ObjectId, ref: "Status" },
    name: { type: String, require: true, lowercase: true },
    lastName: { type: String, lowercase: true },
    phone: { type: String },
    userName: { type: String, require: true },
    password: { type: String, require: true }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

EmployeeSchema.methods.toJSON = function() {
  let user = this.toObject();
  delete user.password;
  return user;
};

EmployeeSchema.pre("save", async function(next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(user.password, salt);
  user.password = hashedPassword;

  next();
});

EmployeeSchema.methods.comparePasswords = function(password) {
  return compareSync(password, this.password);
};

module.exports = mongoose.model("Employee", EmployeeSchema);
