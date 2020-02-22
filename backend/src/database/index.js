import Sequelize from "sequelize";
import config from "../config/database";

//Models
import Edificio from "../models/Edificio";
import Sala from "../models/Sala";
import Pc from "../models/Pc";

//DB connection
const connection = new Sequelize(config);

//Models Call
Edificio.init(connection);
Sala.init(connection);
Pc.init(connection);

export default connection;
