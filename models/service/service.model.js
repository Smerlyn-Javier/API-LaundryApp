const mongoose = require("mongoose");
const { Schema } = mongoose;

const ServiceModel = new Schema(
  {
    service: { type: String, lowercase: true },
    price: { type: Number }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Service", ServiceModel);
