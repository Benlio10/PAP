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

    const session = await connection("utilizadores")
      .first("*")
      .where({ n_processo });

    if (session && bcrypt.compareSync(password, session.password))
      return res.json(session);

    return res.status(401).json({ error: "Wrong Credentials" });
  }
};
