const express = require("express");
const routes = express.Router();
const userController = require("./controllers/userController");
const authUser = require("./middleware/auth");

//Rotas de usuários
routes.get("/users/:id", authUser, userController.showUserOne);
routes.get("/users", authUser, userController.showUser);
routes.post("/users", userController.store);
routes.patch("/users/:id", authUser, userController.updateUser);
routes.patch("/endUser/:user_id", authUser, userController.updateEndereco);
routes.post("/logOn", userController.logOn);
routes.delete("/users/:id", userController.deletUser);

module.exports = routes;
