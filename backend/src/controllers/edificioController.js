const connection = require("../database/connection");
const { request, response } = require("express");

module.exports = {
  /**
   * Express request & response
   * @param {request} req
   * @param {response} res
   */
  async index(req, res) {
    const edificios = await connection("edificios").select("*");

    return res.json(edificios);
  }
};
