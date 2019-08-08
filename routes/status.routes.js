const router = require("express").Router();
const { StatusController } = require("../controller");

router.get("/:id", StatusController.getStatu);
router.get("", StatusController.getStatus);
router.post("", StatusController.createStatus);
router.put("/:id", StatusController.updateStatus);
router.delete("/:id", StatusController.deleteStatus);

module.exports = router;
