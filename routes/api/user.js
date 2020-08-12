const express = require("express");
const router = require("express-promise-router")();

const UserController = require("../../controllers/userArtistController");
router
  .route("/:userId/artist")
  .get(UserController.getUserArtist)
  .post(UserController.addUserArtist)
  .delete(UserController.deleteUserArtist);
module.exports = router;
