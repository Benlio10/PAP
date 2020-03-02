import Sequelize from "sequelize";
import config from "../config/database";
import importModules from "import-modules";

//DB connection
const connection = new Sequelize(config);

//Models
const models = importModules("../models");

//Models Call
for (const key in models) {
  models[key].default.init(connection);
}

//Models Association
for (const key in models) {
  models[key].default.associate(connection.models);
}

export default connection;
