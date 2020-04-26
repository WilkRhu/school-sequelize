const express = require("express");
const routes = express.Router();
const userController = require("./controllers/userController");

routes.post("/users", userController.store);
routes.patch("/users/:id", userController.updateUser);
routes.patch("/endUser/:user_id", userController.updateEndereco);

module.exports = routes;
