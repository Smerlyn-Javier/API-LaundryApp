const { Steps } = require("../../models");

class StepsController {
  //one steps
  async getStep(req, res, next) {
    const id = req.params;
    const step = await Steps.findById(id);
    return res.send(step);
  }
  // all steps
  async getSteps(req, res, next) {
    const steps = await Steps.find();
    return res.send(steps);
  }
  //create steps
  async createStep(req, res, next) {
    const { body } = req;
    const step = await Steps.create([body]);
    return res.send(step);
  }
  // updating steps
  async updateStep(req, res, next) {
    const { id } = req.params;
    const { body } = req;
    const step = await Steps.findByIdAndUpdate(id, body, {
      new: true
    });
    return res.send(step);
  }
  // delete steps
  async deleteStep(req, res, next) {
    const { id } = req.params;
    const step = await Steps.findByIdAndDelete(id);
    return res.send(step);
  }
}

module.exports = new StepsController();
