import Pc from "../models/Pc";
import Sala from "../models/Sala";

export default {
  async index(req, res) {
    const { id_sala } = req.params;

    const pcs = await Sala.findByPk(id_sala, {
      include: { association: "pcs" }
    });

    return res.json(pcs);
  },

  async store(req, res) {
    const { id_sala } = req.params;

    const { x, y } = req.body;

    let pc = await Pc.findOne({
      where: {
        id_sala,
        x,
        y
      }
    });

    if (pc) {
      return res.status(400), res.json({ message: "PC já existente!" });
    }

    pc = await Pc.create({
      id_sala,
      x,
      y
    });

    return res.json(pc);
  }
};
