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
    console.log(count["count(*)"]);

    const avaria = await connection("avarias")
      .join("pcs", "pcs.id", "avarias.id_pc")
      .limit(6)
      .offset((page - 1) * 6)
      .select(["avarias.*", "pcs.x", "pcs.y"]);

    res.header("X-TOTAL-COUNT", count["count(*)"]);

    return res.json(avaria);
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

    const avaria = await connection("avarias").update({ resolvido });

    return res.json(avaria);
  }
};
