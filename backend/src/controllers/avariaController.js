const connection = require("../database/connection");
const { request, response } = require("express");

module.exports = {
  /**
   * Express request & response
   * @param {request} req
   * @param {response} res
   */
  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection("avarias").count();

    const avarias = await connection("avarias")
      .join("utilizadores", "utilizadores.id", "avarias.id_utilizador")
      .join("pcs", "pcs.id", "avarias.id_pc")
      .join("salas", "salas.id", "pcs.id_sala")
      .join("edificios", "edificios.id", "salas.id_edificio")
      // .limit(8)
      // .offset((page - 1) * 8)
      .select(
        "avarias.*",
        "utilizadores.nome as utilzador_nome",
        "utilizadores.apelido as utilizador_apelido",
        "pcs.x as pc_x",
        "pcs.y as pc_y",
        "salas.num_sala",
        "salas.x as sala_x",
        "salas.y as sala_y",
        "edificios.designacao"
      )
      .where({ resolvido: 0 });

    res.header("X-TOTAL-COUNT", count["count(*)"]);

    return res.json(avarias);
  },

  /**
   * Express request & response
   * @param {request} req
   * @param {response} res
   */
  async store(req, res) {
    const { id_pc, id_utilizador, observacao, hora } = req.body;

    const avaria = await connection("avarias").insert({
      id_pc,
      id_utilizador,
      observacao,
      hora
    });

    return res.json(avaria);
  },

  /**
   * Express request & response
   * @param {request} req
   * @param {response} res
   */
  async update(req, res) {
    const { id } = req.params;
    const { resolvido } = req.body;

    const avaria = await connection("avarias")
      .where({ id })
      .update({ resolvido });

    return res.json(avaria);
  }
};
