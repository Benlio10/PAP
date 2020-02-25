import { Model, DataTypes } from "sequelize";

//prettier-ignore
class sala extends Model {
  static init(sequelize) {
    super.init({
      num_sala: DataTypes.INTEGER,
      x: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      y: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsTo(models.edificio, { foreignKey: "id_edificio", as: "edificio" });
    this.hasMany(models.pc, { foreignKey: "id_sala", as: "pcs" });
  }
}

export default sala;
