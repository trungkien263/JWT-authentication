const authController = require("../controllers/authController");

const router = require("express").Router();

//Register routes
router.post("/register", authController.registerUser);

//Login routes
router.post("/login", authController.loginUser);

//Refresh routes
router.post("/refresh", authController.requestRefreshToken);

module.exports = router;
