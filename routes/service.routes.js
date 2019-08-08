const router = require("express").Router();
const { ServiceController } = require("../controller");

router.get("", ServiceController.getServices);
router.get("/:id", ServiceController.getService);
router.post("", ServiceController.createService);
router.put("/:id", ServiceController.updateService);
router.delete("/:id", ServiceController.deleteService);

module.exports = router;
