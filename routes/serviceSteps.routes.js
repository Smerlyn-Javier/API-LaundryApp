const router = require("express").Router();
const { ServiceStepsController } = require("../controller");

router.get("", ServiceStepsController.getServices);
router.get("/:id", ServiceStepsController.getService);
router.post("/:serviceId", ServiceStepsController.createService);
router.put("/:id", ServiceStepsController.updateService);
router.delete("/:id", ServiceStepsController.deleteService);

module.exports = router;
