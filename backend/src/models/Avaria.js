import { Model, DataTypes } from "sequelize";
import sequelizePaginate from "sequelize-paginate";

class avaria extends Model {
  static init(sequelize) {
    super.init(
      {
        hora: DataTypes.DATE(6),
        observacao: DataTypes.STRING,
        resolvido: DataTypes.BOOLEAN
      },
      { sequelize, tableName: "avarias" }
    );
  }

  static associate(models) {
    this.belongsTo(models.pc, { foreignKey: "id_pc", as: "pc" });
    this.belongsTo(models.user, { foreignKey: "id_utilizador", as: "user" });
  }
}

sequelizePaginate.paginate(avaria);

export default avaria;
