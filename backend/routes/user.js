const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndUserAuthorization,
} = require("../controllers/middlewareController");
const userController = require("../controllers/userController");

//Get all users
router.get("/", verifyToken, userController.getAllUsers);

//Delete user
router.delete(
  "/:id",
  verifyTokenAndUserAuthorization,
  userController.deleteUser
);

module.exports = router;
