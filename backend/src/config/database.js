export default {
  database: process.env.DB_DB2,
  username: process.env.DB_USER2,
  password: process.env.DB_PASS2,
  host: process.env.DB_HOST2,
  dialect: "mariadb",
  define: {
    timestamps: false
  }
};
