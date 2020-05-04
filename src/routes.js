const express = require("express");
const routes = express.Router();
const userController = require("./controllers/userController");
const multer = require("multer");
const multiFile = require("./middleware/multer");
var upload = multer({ dest: 'tmp/uploads/' })
const authUser = require("./middleware/auth");



//Rotas de usuários
routes.get("/users/:id", authUser, userController.showUserOne);
routes.get("/users", authUser, userController.showUser);
routes.post("/users", multer(multiFile).single('file'), userController.store);
routes.patch("/users/:id", authUser, upload.single(multiFile), userController.updateUser);
routes.patch("/endUser/:user_id", authUser, userController.updateEndereco);
routes.post("/logOn", userController.logOn);
routes.delete("/users/:id", authUser, userController.deletUser);

module.exports = routes;
