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

  static associate(models) {
    this.hasMany(models.sala, { foreignKey: "id_edificio", as: "salas" });
  }
}

export default edificio;
