const { Order } = require("../models");

class OrderController {
  //all orders
  async getOrders(req, res, next) {
    const orders = await Order.find()
      .populate("idEmployee")
      .populate("idUser")
      .populate("idService");
    return res.send(orders);
  }
  //one order
  async getOrder(req, res, next) {
    const { id } = req.params;
    const order = await Order.findById(id)
      .populate("idEmployee")
      .populate("idUser");
    return res.send(order);
  }
  //create order
  async createOrder(req, res, next) {
    const { body } = req;
    const order = await Order.create([body]);
    return res.send(order);
  }
  //update order
  async updateOrder(req, res, next) {
    const { id } = req.params;
    const { body } = req;
    const order = await Order.findByIdAndUpdate(id, body, { new: true });
    return res.send(order);
  }
  //detele order
  async deleteOrder(req, res, next) {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);
    return res.send(order);
  }
}

module.exports = new OrderController();
