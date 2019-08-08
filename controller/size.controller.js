const { Size } = require("../models");

class SizeController {
  //one size
  async getSize(req, res, next) {
    const id = req.params;
    const size = await Size.findById(id);
    return res.send(size);
  }
  // all size
  async getSizes(req, res, next) {
    const sizes = await Size.find();
    return res.send(sizes);
  }
  //create size
  async createSize(req, res, next) {
    const { body } = req;
    const size = await Size.create([body]);
    return res.send(size);
  }
  // updating size
  async updateSize(req, res, next) {
    const { id } = req.params;
    const { body } = req;
    const size = await Size.findByIdAndUpdate(id, body, { new: true });
    return res.send(size);
  }
  // delete size
  async deleteSize(req, res, next) {
    const { id } = req.params;
    const size = await Size.findByIdAndDelete(id);
    return res.send(size);
  }
}
module.exports = new SizeController();
