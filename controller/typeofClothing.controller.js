const { TypeClothing } = require("../models");

class TypeClothingController {
  //all TypeClothing
  async getTypeClothings(req, res, next) {
    const typeClothings = await TypeClothing.find();
    return res.send(typeClothings);
  }
  //one TypeClothing
  async getTypeClothing(req, res, next) {
    const { id } = req.params;
    const typeClothing = await TypeClothing.findById(id);
    return res.send(typeClothing);
  }
  //create TypeClothing
  async createTypeClothing(req, res, next) {
    const { body } = req;
    const typeClothing = await TypeClothing.create([body]);
    return res.send(typeClothing);
  }
  //updating TypeClothing
  async updateTypeClothing(req, res, next) {
    const id = req.params;
    const { body } = req;
    const typeClothing = await TypeClothing.findByIdAndUpdate(id, body, {
      new: true
    });
    return res.send(typeClothing);
  }
  //delete TypeClothing
  async deleteTypeClothing(req, res, next) {
    const id = req.params;
    const typeClothing = await TypeClothing.findByIdAndDelete(id);
    return res.send(typeClothing);
  }
}

module.exports = new TypeClothingController();
