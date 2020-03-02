import { Model, DataTypes } from "sequelize";

//prettier-ignore
class pc extends Model {
  static init(sequelize) {
    super.init({
        x: DataTypes.INTEGER,
        y: DataTypes.INTEGER
      }, {
        sequelize
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.sala, { foreignKey: "id_sala", as: "sala" });
    this.hasMany(models.avaria, { foreignKey: "id_pc", as: "avarias" });
  }
}

export default pc;
