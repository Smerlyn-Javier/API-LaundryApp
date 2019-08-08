const { Color } = require("../models");

class ColorController {
  //one color
  async getColor(req, res, next) {
    const id = req.params;
    const color = await Color.findById(id);
    return res.send(color);
  }
  // all color
  async getColors(req, res, next) {
    const colors = await Color.find();
    return res.send(colors);
  }
  //create color
  async createColor(req, res, next) {
    const { body } = req;
    const color = await Color.create([body]);
    return res.send(color);
  }
  // updating color
  async updateColor(req, res, next) {
    const { id } = req.params;
    const { body } = req;
    const color = await Color.findByIdAndUpdate(id, body, { new: true });
    return res.send(color);
  }
  // delete color
  async deleteColor(req, res, next) {
    const { id } = req.params;
    const color = await Color.findByIdAndDelete(id);
    return res.send(color);
  }
}

module.exports = new ColorController();
