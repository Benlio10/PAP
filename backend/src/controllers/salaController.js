const connection = require("../database/connection");
const { request, response } = require("express");

module.exports = {
  /**
   * Express request & response
   * @param {request} req
   * @param {response} res
   */
  async index(req, res) {
    const id_edificio = req.params.id;

    const salas = await connection("salas")
      .join("edificios", "edificios.id", "salas.id_edificio")
      .where({ id_edificio })
      .select(["salas.*", "edificios.designacao"])
      .orderBy("num_sala");

    return res.json(salas);
  },

  /**
   * Express request & response
   * @param {request} req
   * @param {response} res
   */
  async store(req, res) {
    const { num_sala, x = null, y = null, id_edificio } = req.body;

    let sala = await connection("salas").where({
      num_sala,
      id_edificio
    });

    if (sala.length)
      return res.status(400) && res.json({ error: "Sala já existente!" });

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
      .join("edificios", "edificios.id", "salas.id_edificio")
      .where("salas.id", "=", `${id}`)
      .first(["salas.*", "edificios.designacao"]);

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
