const { User } = require("../models");

class UserController {
  //obtener usuarios
  async getUsers(req, res, next) {
    const users = await User.find();
    return res.send(users);
  }
  //obtener usuario por id
  async getUser(req, res, next) {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.send(user);
  }
  //creando usuario
  async createUser(req, res, next) {
    const { body } = req;
    const user = await User.create([body]);
    return res.send(user);
  }
}

module.exports = new UserController();
