const router = require("express").Router();
const { PositionController } = require("../controller");

router.get("", PositionController.getPositions);
router.get("/:id", PositionController.getPosition);
router.post("", PositionController.createPositions);
router.put("/:id", PositionController.updatePositions);
router.delete("/:id", PositionController.deletePositions);

module.exports = router;
