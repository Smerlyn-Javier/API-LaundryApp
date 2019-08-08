const { Status } = require("../models");

class StatusOrderController {
  //one status
  async getStatu(req, res, next) {
    const id = req.params;
    const statu = await Status.findById(id);
    return res.send(statu);
  }
  // all status
  async getStatus(req, res, next) {
    const status = await Status.find();
    return res.send(status);
  }
  //create status
  async createStatus(req, res, next) {
    const { body } = req;
    const statu = await Status.create([body]);
    return res.send(statu);
  }
  // updating status
  async updateStatus(req, res, next) {
    const { id } = req.params;
    const { body } = req;
    const statu = await Status.findByIdAndUpdate(id, body, { new: true });
    return res.send(statu);
  }
  // delete status
  async deleteStatus(req, res, next) {
    const { id } = req.params;
    const statu = await Status.findByIdAndDelete(id);
    return res.send(statu);
  }
}
module.exports = new StatusOrderController();
