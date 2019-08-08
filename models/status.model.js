const mongoose = require("mongoose");
const { Schema } = mongoose;

const StatusSchema = new Schema(
  {
    status: { type: String, require: true }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Status", StatusSchema);
