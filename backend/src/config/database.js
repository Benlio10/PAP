export default {
  database: process.env.DB_DB,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  dialect: "mariadb",
  define: {
    timestamps: false
  }
};
