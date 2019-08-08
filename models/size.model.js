const mongoose = require("mongoose");
const { Schema } = mongoose;

const SizeModel = new Schema(
  {
    size: { type: String }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Size", SizeModel);
