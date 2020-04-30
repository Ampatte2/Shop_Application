const express = require("express");
const controller = require("./controller");
const router = express.Router();

router.post("/login", controller.login);
router.post("/register", controller.register);
router.post("/getData", controller.getData);
router.post("/getUser", controller.getUser);
router.post("/adminLogin", controller.adminLogin);


module.exports = router;