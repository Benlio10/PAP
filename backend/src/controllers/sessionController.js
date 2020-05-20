const connection = require("../database/connection");
const { request, response } = require("express");
const bcrypt = require("bcryptjs");

module.exports = {
  /**
   * Express request & response
   * @param {request} req
   * @param {response} res
   */
  async create(req, res) {
    const { n_processo, password } = req.body;

    const session = await connection("utilizadores").where({ n_processo });

    if (session.length && bcrypt.compareSync(password, session[0].password))
      return res.json(session);

    return res.status(205).json({ error: "Wrong Credentials" });
  }
};
