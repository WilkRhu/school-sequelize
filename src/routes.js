const express = require("express");
const routes = express.Router();
const userController = require("./controllers/userController");
const serieController = require("./controllers/serieController");
const materiaController = require("./controllers/materiaController");
const multer = require("multer");
const multiFile = require("./middleware/multer");
var upload = multer({ dest: "tmp/uploads/" });
const authUser = require("./middleware/auth");

//Rotas de usuários
routes.get("/users/:id", authUser, userController.showUserOne);
routes.get("/users", authUser, userController.showUser);
routes.post("/users", multer(multiFile).single("file"), userController.store);
routes.patch(
  "/users/:id",
  authUser,
  upload.single(multiFile),
  userController.updateUser
);
routes.patch("/endUser/:user_id", authUser, userController.updateEndereco);
routes.post("/logOn", userController.logOn);
routes.delete("/users/:id", authUser, userController.deletUser);
routes.put(
  "/users/:id",
  authUser,
  multer(multiFile).single("file"),
  userController.updateFotoPerfil
);

//Rotas Séries
routes.post("/series", authUser, serieController.store);
routes.get("/series", authUser, serieController.show);
routes.patch("/series/:id", authUser, serieController.update);
routes.delete("/series/:id", authUser, serieController.deleting);

//Rotas Matérias
routes.post("/materias", materiaController.create);
routes.get("/materias", materiaController.show);
routes.patch("/materias/:id", materiaController.update);
routes.delete("/materias/:id", materiaController.deleting);

module.exports = routes;
