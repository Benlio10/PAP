const connection = require("../database/connection");
const { request, response } = require("express");

module.exports = {
  /**
   * Express request & response
   * @param {request} req
   * @param {response} res
   */
  async index(req, res) {
    const id_sala = req.headers.authorization;

    const pcs = await connection("pcs")
      .where({ id_sala })
      .select("*");

    return res.json(pcs);
  },

  /**
   * Express request & response
   * @param {request} req
   * @param {response} res
   */
  async store(req, res) {
    const { id_sala, x, y } = req.body;

    let pc = await connection("pcs").where({
      id_sala,
      x,
      y
    });

    if (pc.length) return res.status(400).json({ error: "PC já existente!" });

    pc = await connection("pcs").insert({
      id_sala,
      x,
      y
    });

    return res.json(pc);
  }
};
