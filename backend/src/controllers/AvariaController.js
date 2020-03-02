import Avaria from "../models/Avaria";

export default {
  async index(req, res) {
    const { page = 1 } = req.query;

    const avarias = await Avaria.paginate({
      where: {
        resolvido: false
      },
      page,
      paginate: 10
    });

    return res.json(avarias);
  },

  async store(req, res) {
    const { id_pc } = req.params;

    const { id_utilizador, hora, observacao } = req.body;

    const avaria = await Avaria.create({
      id_pc,
      id_utilizador,
      observacao,
      hora
    });

    return res.json(avaria);
  },

  async show(req, res) {
    const { id } = req.params;

    const avaria = await Avaria.findByPk(id, {
      include: { association: "pc", include: { association: "sala" } } // users assoc
    });

    return res.json(avaria);
  },

  async update(req, res) {
    const { id } = req.params;

    const { resolvido } = req.body;

    const avaria = await Avaria.update({ resolvido }, { where: { id } });

    return res.json(avaria);
  }
};
