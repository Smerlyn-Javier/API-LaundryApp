const router = require("express").Router();
const { SizeController } = require("../controller");

router.get("/:id", SizeController.getSize);
router.get("", SizeController.getSizes);
router.post("", SizeController.createSize);
router.put("/:id", SizeController.updateSize);
router.delete("/:id", SizeController.deleteSize);

module.exports = router;
