const { Router } = require("express");

const routes = Router();

const edificioController = require("./controllers/edificioController");
const salaController = require("./controllers/salaController");
const pcController = require("./controllers/pcController");
const avariaController = require("./controllers/avariaController");
const sessionController = require("./controllers/sessionController");

routes.get("/", (req, res) => {
  return res.send("Server !!");
});

// Route Edificios
routes.get("/blocos", edificioController.index);

// Routes Salas
routes.get("/salas/:id", salaController.index);
routes.post("/salas", salaController.store);
routes.get("/sala/:id", salaController.show);
routes.put("/sala/:id", salaController.update);

// Routes PCs
routes.get("/pcs/:id", pcController.index);
routes.post("/pcs", pcController.store);

// Routes Avarias
routes.get("/avarias", avariaController.index);
routes.post("/avarias", avariaController.store);
routes.put("/avaria/:id", avariaController.update);

// Routes Session
routes.post("/session", sessionController.create);

module.exports = routes;
