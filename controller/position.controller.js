const { Position } = require("../models");

class PositionController {
  //one position
  async getPosition(req, res, next) {
    const id = req.params;
    const position = await Position.findById(id);
    return res.send(position);
  }
  // all position
  async getPositions(req, res, next) {
    const positions = await Position.find();
    return res.send(positions);
  }
  //create position
  async createPositions(req, res, next) {
    const { body } = req;
    const position = await Position.create([body]);
    return res.send(position);
  }
  // updating position
  async updatePositions(req, res, next) {
    const { id } = req.params;
    const { body } = req;
    const position = await Position.findByIdAndUpdate(id, body, { new: true });
    return res.send(position);
  }
  // delete position
  async deletePositions(req, res, next) {
    const { id } = req.params;
    const position = await Position.findByIdAndDelete(id);
    return res.send(position);
  }
}

module.exports = new PositionController();
