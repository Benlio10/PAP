import Edificio from "../models/Edificio";

export default {
  async index(req, res) {
    const edificios = await Edificio.findAll();

    return res.json(edificios);
  }
};
