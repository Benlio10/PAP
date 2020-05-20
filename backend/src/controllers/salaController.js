const connection = require("../database/connection");
const { request, response } = require("express");

module.exports = {
  /**
   * Express request & response
   * @param {request} req
   * @param {response} res
   */
  async index(req, res) {
    const id_edificio = req.headers.authorization;

    const salas = await connection("salas")
      .where({ id_edificio })
      .select("*");

    return res.json(salas);
  },

  /**
   * Express request & response
   * @param {request} req
   * @param {response} res
   */
  async store(req, res) {
    const { num_sala, x = 0, y = 0, id_edificio } = req.body;

    let sala = await connection("salas").where({
      num_sala,
      id_edificio
    });

    if (sala.length)
      return res.status(400).json({ error: "Sala já existente!" });

    sala = await connection("salas").insert({
      num_sala,
      id_edificio,
      x,
      y
    });

    return res.json(sala);
  },

  /**
   * Express request & response
   * @param {request} req
   * @param {response} res
   */
  async show(req, res) {
    const { id } = req.params;

    const sala = await connection("salas")
      .where({ id })
      .select("*");

    return res.json(sala);
  },

  /**
   * Express request & response
   * @param {request} req
   * @param {response} res
   */
  async update(req, res) {
    const { id } = req.params;
    const updatedSala = req.body;

    const sala = await connection("salas")
      .where({ id })
      .update(updatedSala);

    return res.json(sala);
  }
};
