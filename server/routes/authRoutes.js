const express = require("express");
const { register, login } = require("../controllers/authController");
const router = express.Router();

router.post("/register", register); // Hanya untuk setup admin awal
router.post("/login", login);

module.exports = router;
