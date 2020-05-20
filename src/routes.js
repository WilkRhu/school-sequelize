const express = require("express");
const routes = express.Router();
const userController = require("./controllers/userController");
const serieController = require("./controllers/serieController");
const materiaController = require("./controllers/materiaController");
const estudantesController = require("./controllers/estudantesController");
const professorController = require("./controllers/professorController");
const multer = require("multer");
const multiFile = require("./middleware/multer");
var upload = multer({ dest: "tmp/uploads/" });
const authUser = require("./middleware/auth");
const aulasController = require("./controllers/aulasController");

//Rotas de usuários
routes.get("/users", authUser, userController.showUser);
routes.get("/users/:id", authUser, userController.showUserOne);
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
routes.post("/materias", materiaController.store);
routes.get("/materias", materiaController.show);
routes.patch("/materias/:id", materiaController.update);
routes.delete("/materias/:id", materiaController.deleting);

//Rotas Aulas
routes.post("/aulas", aulasController.store);
routes.get("/aulas", aulasController.show);
routes.get("/aulas/:id", aulasController.showOne);
routes.patch("/aulas/:id", aulasController.update);
routes.delete("/aulas/:id", aulasController.deleting);

//Rotas Estudantes
routes.get("/estudantes", estudantesController.show);
routes.get("/estudantes/:id", estudantesController.showOne);
routes.patch("/estudantes/:id", estudantesController.update);
routes.delete("/estudantes/:id", estudantesController.deleting);

//Rotas Professor
routes.get("/professor", professorController.show);
routes.get("/professor/:id", professorController.showOne);
routes.patch("/professor/:id", professorController.update);
routes.delete("/professor/:id", professorController.deleting);

module.exports = routes;
