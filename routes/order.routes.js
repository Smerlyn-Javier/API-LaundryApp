const router = require("express").Router();
const { OrderController } = require("../controller");

router.get("", OrderController.getOrders);
router.get("/:id", OrderController.getOrder);
router.post("", OrderController.createOrder);
router.put("/:id", OrderController.updateOrder);
router.delete("/:id", OrderController.deleteOrder);

module.exports = router;
