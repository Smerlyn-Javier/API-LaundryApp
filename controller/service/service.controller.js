const { Service } = require("../../models");

class ServiceController {
  //one service
  async getService(req, res, next) {
    const id = req.params;
    const service = await Service.findById(id);
    return res.send(service);
  }
  // all service
  async getServices(req, res, next) {
    const services = await Service.find();
    return res.send(services);
  }
  //create service
  async createService(req, res, next) {
    const { body } = req;
    const service = await Service.create([body]);
    return res.send(service);
  }
  // updating service
  async updateService(req, res, next) {
    const { id } = req.params;
    const { body } = req;
    const service = await Service.findByIdAndUpdate(id, body, { new: true });
    return res.send(service);
  }
  // delete service
  async deleteService(req, res, next) {
    const { id } = req.params;
    const service = await Service.findByIdAndDelete(id);
    return res.send(service);
  }
}

module.exports = new ServiceController();
