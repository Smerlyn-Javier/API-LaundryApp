const mongoose = require("mongoose");
const { Schema } = mongoose;

const StatusOrderSchema = new Schema(
  {
    status: { type: String, require: true }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("StatusOrder", StatusOrderSchema);
