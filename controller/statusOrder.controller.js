const { StatusOrder } = require("../models");

class StatusOrderController {
  //one status
  async getStatu(req, res, next) {
    const id = req.params;
    const statu = await StatusOrder.findById(id);
    return res.send(statu);
  }
  // all status
  async getStatus(req, res, next) {
    const status = await StatusOrder.find();
    return res.send(status);
  }
  //create status
  async createStatus(req, res, next) {
    const { body } = req;
    const statu = await StatusOrder.create([body]);
    return res.send(statu);
  }
  // updating status
  async updateStatus(req, res, next) {
    const { id } = req.params;
    const { body } = req;
    const statu = await StatusOrder.findByIdAndUpdate(id, body, { new: true });
    return res.send(statu);
  }
  // delete status
  async deleteStatus(req, res, next) {
    const { id } = req.params;
    const statu = await StatusOrder.findByIdAndDelete(id);
    return res.send(statu);
  }
}
module.exports = new StatusOrderController();
