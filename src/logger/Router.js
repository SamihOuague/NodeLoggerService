const router = require("express").Router();
const controller = require("./Controller");

router.get("/log/:start/:end", controller.getLog);
router.post("/log", controller.postLog);

module.exports = router;