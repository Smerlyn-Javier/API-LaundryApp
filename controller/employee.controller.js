const { Employee } = require("../models");

class EmployeeController {
  //one employee
  async getEmployee(req, res, next) {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    return res.send(employee);
  }
  // all employee
  async getEmployees(req, res, next) {
    const employees = await Employee.find().populate("idPosition");
    return res.send(employees);
  }
  //create employee
  async createEmployee(req, res, next) {
    const { body } = req;
    const employee = await Employee.create([body]);
    return res.send(employee);
  }
  // updating employee
  async updateEmployee(req, res, next) {
    const { id } = req.params;
    const { body } = req;
    const employee = await Employee.findByIdAndUpdate(id, body, { new: true });
    return res.send(employee);
  }
  // delete employee
  async deleteEmployee(req, res, next) {
    const { id } = req.params;
    const employee = await Employee.findByIdAndDelete(id);
    return res.send(employee);
  }
}

module.exports = new EmployeeController();
