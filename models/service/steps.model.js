const mongoose = require("mongoose");
const { Schema } = mongoose;

const StepsModel = new Schema(
  {
    step: { type: String }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Step", StepsModel);
