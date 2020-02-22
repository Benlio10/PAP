import { Model, DataTypes } from "sequelize";

//prettier-ignore
class sala extends Model {
  static init(sequelize) {
    super.init({
      num_sala: DataTypes.INTEGER,
      id_edificio: DataTypes.INTEGER,
      x: DataTypes.INTEGER,
      y: DataTypes.INTEGER
    }, {
      sequelize
    });
  }
}

export default sala;
