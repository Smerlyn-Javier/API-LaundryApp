const { ServiceSteps } = require("../../models");

class ServiceStepsController {
  //one serviceSteps
  async getService(req, res, next) {
    const id = req.params;
    const serviceStep = await ServiceSteps.findById(id);
    return res.send(serviceStep);
  }
  // all serviceSteps
  async getServices(req, res, next) {
    const serviceSteps = await ServiceSteps.find().populate("idSteps");
    // console.log(serviceSteps);
    // console.log(serviceSteps[0].idSteps);
    return res.send(serviceSteps);
  }

  //create serviceSteps
  async createService(req, res, next) {
    const { serviceId: idService } = req.params;
    const { steps: idSteps } = req.body;
    const idStatusStepsActual = idSteps[0] || null;

    const serviceStep = await ServiceSteps.create([
      {
        idService,
        idSteps,
        idStatusStepsActual
      }
    ]);

    return res.send(serviceStep);
  }

  // updating serviceSteps
  async updateService(req, res, next) {
    const { id } = req.params;
    const { body } = req;
    const serviceStep = await ServiceSteps.findByIdAndUpdate(id, body, {
      new: true
    });
    return res.send(serviceStep);
  }
  // delete serviceSteps
  async deleteService(req, res, next) {
    const { id } = req.params;
    const serviceStep = await ServiceSteps.findByIdAndDelete(id);
    return res.send(serviceStep);
  }
}

module.exports = new ServiceStepsController();
