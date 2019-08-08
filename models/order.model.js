const mongoose = require("mongoose");
const { Schema } = mongoose;
const StatusOrder = require("./statusOrder.model");

const OrderSchema = new Schema(
  {
    idUser: { type: Schema.Types.ObjectId, ref: "User" },
    idStatusOrder: { type: Schema.Types.ObjectId, ref: "StatusOrder" },
    idService: { type: Schema.Types.ObjectId, ref: "Service" },
    idEmployee: { type: Schema.Types.ObjectId, ref: "Employee" },
    idTypeofClothing: { type: Schema.Types.ObjectId, ref: "TypeofClothing" },
    idColor: { type: Schema.Types.ObjectId, ref: "Color" },
    quantity: { type: Number },
    description: { type: String }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

OrderSchema.pre("save", async function(next) {
  const order = this;
  const defaultStatus = await StatusOrder.findOne({ status: "pending" });
  order.idStatusOrder = defaultStatus;
  next();
});

module.exports = mongoose.model("Order", OrderSchema);
