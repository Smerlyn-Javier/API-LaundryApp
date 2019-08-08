const router = require("express").Router();
const { ColorController } = require("../controller");

router.get("", ColorController.getColors);
router.get("/:id", ColorController.getColor);
router.post("", ColorController.createColor);
router.put("/:id", ColorController.updateColor);
router.delete("/:id", ColorController.deleteColor);

module.exports = router;
