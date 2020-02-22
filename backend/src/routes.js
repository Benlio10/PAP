import { Router } from "express";
import config from "./config/database";
import EdificioController from "./controllers/EdificioController";
import SalaController from "./controllers/SalaController";
import PcController from "./controllers/PcController";

const routes = Router();

routes.get("/blocos", EdificioController.index);

routes.get("/salas", SalaController.index);
routes.post("/salas", SalaController.store);
routes.get("/salas/:id", SalaController.show);
routes.put("/salas/:id", SalaController.update);

routes.get("/pcs", PcController.index);

export default routes;
