const router = require("express").Router();
const { StepsController } = require("../controller");

router.get("/:id", StepsController.getStep);
router.get("", StepsController.getSteps);
router.post("", StepsController.createStep);
router.put("/:id", StepsController.updateStep);
router.delete("/:id", StepsController.deleteStep);

module.exports = router;
