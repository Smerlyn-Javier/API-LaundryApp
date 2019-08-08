const router = require("express").Router();
const { EmployeeController } = require("../controller");

router.get("", EmployeeController.getEmployees);
router.get("/:id", EmployeeController.getEmployee);
router.post("", EmployeeController.createEmployee);
router.put("/:id", EmployeeController.updateEmployee);
router.delete("/:id", EmployeeController.deleteEmployee);

module.exports = router;
