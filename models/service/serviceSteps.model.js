const mongoose = require("mongoose");
const { Schema } = mongoose;

const ServiceStepsModel = new Schema(
  {
    idService: { type: Schema.Types.ObjectId, ref: "Service" },
    idSteps: [{ type: Schema.Types.ObjectId, ref: "Step" }],
    idStatusStepsActual: { type: Schema.Types.ObjectId, ref: "Step" }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("ServiceSteps", ServiceStepsModel);
