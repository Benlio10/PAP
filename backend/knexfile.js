// Update with your config settings.

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "db4free.net",
      user: "leosilva",
      password: "Omnitrix1",
      database: "papsqldatabase"
    },
    useNullAsDefault: true
  },
  // development: {
  //   client: "mysql",
  //   connection: {
  //     host: "192.168.10.100",
  //     user: "root",
  //     password: "",
  //     database: "test"
  //   },
  //   useNullAsDefault: true
  // },
  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
