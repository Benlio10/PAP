import Sala from "../models/Sala";

export default {
  async index(req, res) {
    const salas = await Sala.findAll();

    return res.json(salas);
  },

  async store(req, res) {
    const { num_sala, id_edificio, x, y } = req.body;

    let sala = await Sala.findOne({
      num_sala,
      id_edificio
    });

    if (!sala) {
      sala = await Sala.create({
        num_sala,
        id_edificio,
        x,
        y
      });
    }

    return res.json(sala);
  },

  async show(req, res) {
    const { id } = req.params;

    const sala = await Sala.findOne({
      where: {
        id
      }
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
