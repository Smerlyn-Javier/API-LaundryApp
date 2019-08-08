const router = require("express").Router();
const { StatusOrderController } = require("../controller");

router.get("/:id", StatusOrderController.getStatu);
router.get("", StatusOrderController.getStatus);
router.post("", StatusOrderController.createStatus);
router.put("/:id", StatusOrderController.updateStatus);
router.delete("/:id", StatusOrderController.deleteStatus);

module.exports = router;
