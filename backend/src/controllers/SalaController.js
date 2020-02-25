import Sala from "../models/Sala";
import Edificio from "../models/Edificio";

export default {
  async index(req, res) {
    const { id_edificio } = req.params;

    const salas = await Edificio.findByPk(id_edificio, {
      include: { association: "salas" }
    });

    return res.json(salas);
  },

  async store(req, res) {
    const { id_edificio } = req.params;

    const { num_sala, x = 0, y = 0 } = req.body;

    let sala = await Sala.findOne({
      where: {
        num_sala,
        id_edificio
      }
    });

    if (sala) {
      return res.status(400), res.json({ message: "Sala já existente!" });
    }

    sala = await Sala.create({
      num_sala,
      id_edificio,
      x,
      y
    });

    return res.json(sala);
  },

  async show(req, res) {
    const { id } = req.params;

    const sala = await Sala.findByPk(id, {
      include: { association: "edificio" }
    });

    return res.json(sala);
  },

  async update(req, res) {
    const { id } = req.params;
    const salaUpdated = req.body;

    const sala = await Sala.update(salaUpdated, {
      where: {
        id
      }
    });

    return res.json(sala);
  }
};
