const mongoose = require("mongoose");
const { Schema } = mongoose;

const TypeofClothingSchema = new Schema(
  {
    clothing: { type: String, lowercase: true },
    picture: { type: String }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("TypeofClothing", TypeofClothingSchema);
