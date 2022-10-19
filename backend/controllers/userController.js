const User = require("../models/User");

const userController = {
  //Get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //Delete user
  deleteUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (user) {
        User.findByIdAndUpdate(req.params.id, {
          deleteFlg: true,
        })
          .then(() => {
            res.status(200).json("Delete successfully!");
          })
          .catch((error) => {
            res.status(500).json(error);
          });
      } else {
        res.status(404).json("User does not exist!");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = userController;
