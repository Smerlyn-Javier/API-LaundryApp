const mongoose = require("mongoose");
const { Schema } = mongoose;

const PositionSchema = new Schema(
  {
    position: { type: String, require: true }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Position", PositionSchema);
