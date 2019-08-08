const { User } = require("../models");

class UserController {
  //all users
  async getUsers(req, res, next) {
    const users = await User.find();
    return res.send(users);
  }
  //one user
  async getUser(req, res, next) {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.send(user);
  }
  //create user
  async createUser(req, res, next) {
    const { body } = req;
    const user = await User.create([body]);
    return res.send(user);
  }
  //updating user
  async updateUser(req, res, next) {
    const id = req.params;
    const { body } = req;
    const user = await User.findByIdAndUpdate(id, body, { new: true });
    return res.send(user);
  }
  //delete user
  async deleteUser(req, res, next) {
    const id = req.params;
    const user = await User.findByIdAndDelete(id);
    return res.send(user);
  }
}

module.exports = new UserController();
