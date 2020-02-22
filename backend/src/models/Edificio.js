import { Model, DataTypes } from "sequelize";

// prettier-ignore
class edificio extends Model {
  static init(sequelize) {
    super.init({
      designacao: DataTypes.STRING
    }, {
      sequelize
    });
  }
}

export default edificio;
