import { Model, DataTypes } from "sequelize";

class user extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        apelido: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        bi_cc: DataTypes.STRING,
        nif: DataTypes.STRING,
        n_processo: DataTypes.STRING
      },
      { sequelize, tableName: "utilizadores" }
    );
  }

  static associate(models) {
    this.hasMany(models.avaria, { foreignKey: "id_utilizador", as: "avarias" });
  }
}

export default user;
