const router = require('express').Router();
const eventController = require("../controllers/eventController");

router.get("/all", eventController.selectAll);
router.post("/add" , eventController.add);
router.delete("/delete/:id",eventController.remove)
router.put("/update/:id",eventController.update)

module.exports = router;
