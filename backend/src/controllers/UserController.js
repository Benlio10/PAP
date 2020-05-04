import User from "../models/User";
import bcrypt from "bcryptjs";

export default {
  async show(req, res) {
    const { n_processo, password } = req.body;

    const user = await User.findOne({
      where: {
        n_processo
      }
    });

    if (bcrypt.compareSync(password, user.password)) {
      return res.json(user);
    }

    return res.status(205).json({ error: "Wrong Password!" });
  }
};
