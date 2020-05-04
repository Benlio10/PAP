import { Router } from "express";
import EdificioController from "./controllers/EdificioController";
import SalaController from "./controllers/SalaController";
import PcController from "./controllers/PcController";
import AvariaController from "./controllers/AvariaController";
import UserController from "./controllers/UserController";

const routes = Router();

routes.get("/", (_req, res) => {
  return res.send("Server running!");
});

//Routes Edificios
routes.get("/blocos", EdificioController.index);

//Routes Salas
routes.get("/blocos/:id_edificio/salas", SalaController.index);
routes.post("/blocos/:id_edificio/salas", SalaController.store);
routes.get("/salas/:id", SalaController.show);
routes.put("/salas/:id", SalaController.update);

//Routes PCs
routes.get("/salas/:id_sala/pcs", PcController.index);
routes.post("/salas/:id_sala/pcs", PcController.store);

//Routes Avarias
routes.get("/avarias", AvariaController.index);
routes.post("/pcs/:id_pc/avarias", AvariaController.store);
routes.get("/avarias/:id", AvariaController.show);
routes.put("/avarias/:id", AvariaController.update);

//Routes Users
routes.post("/users", UserController.show);

export default routes;
