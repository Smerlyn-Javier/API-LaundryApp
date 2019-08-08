const router = require("express").Router();
const { TypeClothingController } = require("../controller");

router.get("/:id", TypeClothingController.getTypeClothing);
router.get("", TypeClothingController.getTypeClothings);
router.post("", TypeClothingController.createTypeClothing);
router.put("/:id", TypeClothingController.updateTypeClothing);
router.delete("/:id", TypeClothingController.deleteTypeClothing);

module.exports = router;
