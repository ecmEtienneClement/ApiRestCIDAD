const express = require("express");
const CtrlUsr = require("./ctlUser");
const router = express.Router();
const auth = require("./auth");

router.post("/signup", CtrlUsr.creatUser);
router.post("/login", CtrlUsr.connectUser);
router.get("/getuser/:_email", auth, CtrlUsr.getUser);
router.put("/update/email/:_id", auth, CtrlUsr.updateMailUser);
router.put("/update/password/:_id", auth, CtrlUsr.updateMdpUser);
router.delete("/delete/:_id", CtrlUsr.deleteUser);

module.exports = router;
